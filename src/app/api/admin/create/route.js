import dbConnect from "@/lib/mongodb";
import Admins from "@/models/Admins";
import bcrypt from "bcryptjs";


export async function POST(req) {
  try {
    const { email, pwd } = await req.json();

    if (!email || !pwd) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Ensure database connection
    await dbConnect();

    // Check if user already exists
    const existingUser = await Admins.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("Creating new admin...");

    // Hash password
    const hashedPassword = await bcrypt.hash(pwd, 10);

    // Debug: Check admin object before saving
    const newAdmin = new Admins({
      email,
      isAdmin: true, // Explicitly set this
      pwd: hashedPassword,
    });

    console.log("Admin data before saving:", newAdmin);

    // Save the new admin
    await newAdmin.save();

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        admin: newAdmin,
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in /api/admin/create:", error);
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
