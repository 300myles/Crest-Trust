import authMiddleware from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Transactions from "@/models/Transactions";

export async function GET(req) {
  // Authenticate the admin user
  const user = await authMiddleware(req);
  if (user instanceof Response) return user; // Return if authentication failed

  try {
    await dbConnect();

    // Ensure the user is an admin
    if (!user.adminId) {
      return new Response(
        JSON.stringify({ message: "Unauthorized: Admin access required" }),
        { status: 403 }
      );
    }

    // Fetch all transactions
    const transactions = await Transactions.find().populate("user", "email name");

    return new Response(
      JSON.stringify({ status: "successful", data: transactions }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
