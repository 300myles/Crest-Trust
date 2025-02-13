// pages/api/transactions/create.js

import dbConnect from "@/lib/mongodb";
import authMiddleware from "@/lib/auth";
import Transactions from "@/models/Transactions";
import User from "@/models/User";

async function POST(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { amount, type, description } = req.body;

  if (!amount || !type || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await dbConnect();

    // Find the user by ID (from the token)
    const user = await User.findById(req.user.userId); // We use req.user, set by authMiddleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Calculate the balance after the transaction
    let balanceAfterTransaction;
    if (type === "deposit") {
      balanceAfterTransaction = user.balance + amount;
    } else if (type === "withdrawal") {
      balanceAfterTransaction = user.balance - amount;
    } else {
      return res.status(400).json({ message: "Invalid transaction type" });
    }

    // Create the transaction
    const transaction = new Transactions({
      user: req.user.userId, // Link to authenticated user
      amount,
      type,
      description,
      balanceAfterTransaction,
    });

    await transaction.save();

    // Update the user's balance and add the transaction reference
    user.balance = balanceAfterTransaction;
    user.transactions.push(transaction._id);
    await user.save();

    res.status(201).json({
      message: "Transaction successful",
      transaction,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export default authMiddleware(POST); // Wrap the handler with the authMiddleware
