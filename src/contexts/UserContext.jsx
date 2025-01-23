"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserProfile, logoutUser } from "@/utils/app";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch the user profile data using the service function
  const fetchUser = async () => {
    try {
      const data = await getUserProfile(); // Call the service function
      if (data) {
        setUser(data.user); // Set the user data in state
      } else {
        setUser(null); // If the user is not authenticated
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setIsLoading(false); // Make sure loading is set to false after the fetch
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchUser();
  }, []);

  // Handle logout using the service function
  const logout = async () => {
    try {
      const res = await logoutUser(); // Call the service function for logout
      if (res.ok) {
        setUser(null); // Clear user data on logout
        router.push("/login"); // Redirect to login page
      }
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };


  return (
    <UserContext.Provider
      value={{ user, isLoading, logout, refreshUser: fetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Create a hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};