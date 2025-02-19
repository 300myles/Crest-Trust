import authMiddleware from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Admins from "@/models/Admins";
import bcrypt from "bcryptjs";

export async function PATCH(req) {
  // Authenticate the admin user
  const user = await authMiddleware(req);
  if (user instanceof Response) return user; // Return if authentication failed

  try {
    await dbConnect();

    // Find the admin by their ID
    const admin = await Admins.findById(user.adminId);
    if (!admin) {
      return new Response(
        JSON.stringify({ message: "Admin not found" }),
        { status: 404 }
      );
    }

    // Parse request body
    const { email, pwd, wallet } = await req.json();

    // Update email if provided
    if (email) admin.email = email;

    // Update wallet if provided
    if (wallet) admin.wallet = wallet;

    // Hash new pwd if provided
    if (pwd) {
      const hashedpwd = await bcrypt.hash(pwd, 10);
      admin.pwd = hashedpwd;
    }

    // Save the updated admin details
    await admin.save();

    return new Response(
      JSON.stringify({
        message: "Admin profile updated successfully",
        admin: { email: admin.email },
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
