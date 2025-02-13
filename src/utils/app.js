// Fetch user profile data from the backend
export async function getUserProfile() {
  try {
    const response = await fetch(
      `/api/user/profile`,
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
      `/api/auth/logout`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) return true;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}