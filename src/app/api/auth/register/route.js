
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, pwd, dob } = req.body;

  if (!name || !email || !pwd) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash pwd
    const hashedPassword = await bcrypt.hash(pwd, 10);

    // Create new user
    const newUser = await User.create({
      name,
      balance: 0,
      email,
      dob,
      pwd: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
