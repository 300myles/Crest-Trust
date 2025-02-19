import authMiddleware from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  // Authenticate the admin user
  const user = await authMiddleware(req);
  if (user instanceof Response) return user; // Return if authentication failed

  try {
    await dbConnect();

    // Ensure the user is an admin
    if (!user.adminId) {
        console.log('====================================');
        console.log(user);
        console.log('====================================');
      return new Response(
        JSON.stringify({ message: "Unauthorized: Admin access required" }),
        { status: 403 }
      );
    }

    // Fetch all users
    const users = await User.find({}, "-pwd"); // Exclude password field for security

    return new Response(
      JSON.stringify({ status: "successful", data: users }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
