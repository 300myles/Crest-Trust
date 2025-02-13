import cookie from "cookie";

export default function POST(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  // Remove the authToken cookie by setting its maxAge to 0
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(0), // Set an expired date
    })
  );

  res.status(200).json({ message: "Logged out successfully" });
}
