import jwt from "jsonwebtoken";
import * as cookie from "cookie";

export default async function authMiddleware(req) {
  // Parse cookies manually (since Next.js does not do it automatically)
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);
  const token = cookies.authToken;

  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized: No token" }), { 
      status: 401 
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user; // Return user object instead of modifying req
  } catch (error) {
    return new Response(JSON.stringify({ message: "Invalid token" }), { 
      status: 401 
    });
  }
}
