import dbConnect from "@/lib/mongodb";
import { authMiddleware } from "@/lib/auth";
import Transactions from "@/models/Transactions";
import User from "@/models/User";

export async function POST(req) {
  try {
    // Authenticate user
    const user = await authMiddleware(req);
    if (user instanceof Response) return user; // Return error if authentication fails

    await dbConnect();

    // Parse request body
    const { amount, type, description } = await req.json();

    if (!amount || !type || !description) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return new Response(
        JSON.stringify({ message: "Amount must be greater than zero" }),
        { status: 400 }
      );
    }

    // Find the user
    const userProfile = await User.findById(user.userId);
    if (!userProfile) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404 }
      );
    }

    // Calculate new balance
    let newBalance = userProfile.balance;
    if (type === "deposit") {
      newBalance += amount;
    } else if (type === "withdrawal") {
      if (userProfile.balance < amount) {
        return new Response(
          JSON.stringify({ message: "Insufficient funds" }),
          { status: 400 }
        );
      }
      newBalance -= amount;
    } else {
      return new Response(
        JSON.stringify({ message: "Invalid transaction type" }),
        { status: 400 }
      );
    }

    // Create a transaction
    const transaction = await Transactions.create({
      user: userProfile._id,
      amount,
      type,
      description,
      balanceAfterTransaction: newBalance,
    });

    // Update user balance and add transaction reference
    userProfile.balance = newBalance;
    userProfile.transactions.push(transaction._id);
    await userProfile.save();

    return new Response(
      JSON.stringify({
        message: "Transaction successful",
        transaction,
        user: {
          id: userProfile._id,
          name: userProfile.name,
          email: userProfile.email,
          balance: userProfile.balance,
        },
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
