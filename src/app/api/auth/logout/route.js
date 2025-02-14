import * as cookie from "cookie";

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
    });
  }

  try {
    // Remove the authToken cookie by setting its maxAge to 0
    const cookieHeader = req.headers.get("cookie") || "";
    const cookies = cookie.parse(cookieHeader);

    // Clear the authToken cookie
    const token = cookies.authToken || "";
    
    // Set the expired date for the authToken cookie
    const serializedCookie = cookie.serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Only secure in production
      sameSite: "strict",
      path: "/",
      expires: new Date(0), // Set an expired date
    });

    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": serializedCookie, // Set the cookie to expire
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Server error", error: error.message }),
      { status: 500 }
    );
  }
}
