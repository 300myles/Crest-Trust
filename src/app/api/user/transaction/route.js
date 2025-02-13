// pages/api/user/transactions.js
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import authMiddleware from "@/lib/authMiddleware";

async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method Not Allowed" });

  try {
    await dbConnect();

    // Find the user and populate the transactions using the user data from the middleware
    const user = await User.findById(req.user.userId).populate("transactions");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.transactions); // Return the user's transactions
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export default authMiddleware(handler);  // Wrap the handler with the authMiddleware
