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

// Fetch user transactions data from the backend
export async function getUserTransactions() {
  try {
    const response = await fetch(
      `/api/user/transaction`,
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
    console.error("Error fetching user transactions:", error);
    throw error;
  }
}

export async function makeTransaction(form) {
  try {
    const response = await fetch(`/api/transactions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Transaction failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error making transaction:", error);
    throw error;
  }
}


// Logout the user by hitting the /logout endpoint
export async function logoutUser() {
  try {
    const response = await fetch(
      `/api/auth/logout`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (response.ok) return true;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
}

export const copyFunction = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => alert("Copied to clipboard!"))
    .catch((err) => console.error("Failed to copy: ", err));
};