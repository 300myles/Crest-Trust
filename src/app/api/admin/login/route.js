import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Admins from "@/models/Admins";

export async function POST(req) {
  try {
    // Parse request body
    const { email, pwd } = await req.json();

    if (!email || !pwd) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), {
        status: 400,
      });
    }

    await dbConnect();

    // Find user by email
    const admin = await Admins.findOne({ email });
    if (!admin) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(pwd, admin.pwd);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Generate JWT token
    const token = jwt.sign({ adminId: admin._id, email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    })

    // Set cookie header
    const cookieHeader = cookie.serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 24 * 60 * 60, // 1 day
    });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        admin: { id: admin._id, email: admin.email },
      }),
      {
        status: 200,
        headers: { "Set-Cookie": cookieHeader },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}