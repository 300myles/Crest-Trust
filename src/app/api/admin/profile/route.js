import dbConnect from "@/lib/mongodb";
import authMiddleware from "@/lib/auth";
import Admins from "@/models/Admins";

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
    const adminProfile = await Admins.findById(authResponse.adminId);

    if (!adminProfile) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        id: adminProfile._id,
        email: adminProfile.email,
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
