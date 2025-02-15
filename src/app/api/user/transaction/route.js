import dbConnect from "@/lib/mongodb";
import authMiddleware from "@/lib/auth";
import User from "@/models/User";
import Transactions from "@/models/Transactions";

// Define the GET method explicitly'
export async function GET(req) {
  try {
    const authResponse = await authMiddleware(req);

    if (authResponse instanceof Response) {
      return authResponse; // Return authentication error response
    }

    await dbConnect();

    // Fetch user profile using the decoded user ID from the token
    const userProfile = await User.findById(authResponse.userId).lean();
    if (!userProfile) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Fetch user transactions
    const userTransactions = await Transactions.find({
      user: userProfile._id,
    }).lean();

    if (!userTransactions || userTransactions.length === 0) {
      return new Response(
        JSON.stringify({ message: "No transactions found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        status: "success",
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
