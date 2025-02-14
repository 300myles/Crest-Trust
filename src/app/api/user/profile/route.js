import dbConnect from "@/lib/mongodb";
import authMiddleware from "@/lib/auth";
import User from "@/models/User";

// Define the GET method explicitly
export async function GET(req) {
  try {
    // Authenticate user
    const authResponse = await authMiddleware(req);
    
    if (authResponse instanceof Response) {
      return authResponse; // Return authentication error response
    }

    await dbConnect();

    // Fetch user profile using the decoded user ID from the token
    const userProfile = await User.findById(authResponse.userId);

    if (!userProfile) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        id: userProfile._id,
        name: userProfile.name,
        email: userProfile.email,
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
