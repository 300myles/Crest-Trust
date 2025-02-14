import dbConnect from "@/lib/mongodb";
import { authMiddleware } from "@/lib/auth";
import User from "@/models/User";
import Transactions from "@/models/Transactions";

// Define the GET method explicitly
export async function GET(req) {
  // Authenticate the user
  const user = await authMiddleware(req);
  if (user instanceof Response) return user; // Return if authentication failed

  try {
    await dbConnect();

    // Fetch user profile using the decoded user ID from the token
    const userProfile = await User.findById(user.userId);
    if (!userProfile) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Fetch user transactions correctly
    const userTransactions = await Transactions.find({ user: userProfile._id });

    // If no transactions found
    if (!userTransactions.length) {
      return new Response(
        JSON.stringify({ message: "No transactions found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        status: "successful",
        data: userTransactions,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
