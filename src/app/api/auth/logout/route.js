import * as cookie from "cookie";

export async function POST() {
  try {
    // Set the expired date for the authToken cookie
    const serializedCookie = cookie.serialize("authToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure only in production
      sameSite: "strict",
      path: "/",
      expires: new Date(0), // Expired date to remove cookie
    });

    return new Response(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Set-Cookie": serializedCookie, // Clear the authToken cookie
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
