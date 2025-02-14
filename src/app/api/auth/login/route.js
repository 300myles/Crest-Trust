import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as cookie from "cookie";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

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
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(pwd, user.pwd);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set cookie header
    const cookieHeader = cookie.serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: { id: user._id, name: user.name, email: user.email },
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
