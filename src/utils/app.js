// Fetch user profile data from the backend
export async function getUserProfile() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_User_SERVER_URL}/api/user/getuser`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

// Logout the user by hitting the /logout endpoint
export async function logoutUser() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_USER_SERVER_URL}/api/user/logout`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    return response;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}