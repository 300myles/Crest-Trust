"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAdmin,
  getUserProfile,
  getUserTransactions,
  logoutUser,
} from "@/utils/app";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [sideNav, setSideNav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch the user profile data using the service function
  const fetchUser = async () => {
    try {
      const data = await getUserProfile(); // Call the service function
      if (data) {
        setUser(data); // Set the user data in state
      } else {
        setUser(null); // If the user is not authenticated
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setIsLoading(false); // Make sure loading is set to false after the fetch
    }
  };

  const fetchAdmin = async () => {
    try {
      const data = await getAdmin(); // Call the service function
      if (data) {
        setAdmin(data); // Set the user data in state
      } else {
        setAdmin(null); // If the user is not authenticated
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setIsLoading(false); // Make sure loading is set to false after the fetch
    }
  };

  const fetchUserTransactions = async () => {
    try {
      const data = await getUserTransactions(); // Call the service function
      if (data) {
        setTransactions(data?.data); // Set the user transactions in state

        console.log('====================================');
        console.log(data?.data);
        console.log('====================================');
      } else {
        setTransactions([]); // If the user does not exist
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    } finally {
      setIsLoading(false); // Make sure loading is set to false after the fetch
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/admin/users", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setAllUsers(data?.data);
      } else {
        console.error("Error fetching users:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await fetch("/api/admin/transactions", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setAllTransactions(data?.data);
      } else {
        console.error("Error fetching transactions:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (admin) {
      fetchUsers();
      fetchTransactions();
    }
  }, [admin]);

  // Initial fetch
  useEffect(() => {
    fetchUser();
    fetchAdmin();
  }, []);

  // fetch after user state updates
  useEffect(() => {
    if (user) fetchUserTransactions();
  }, [user]);

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
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        isLoading,
        setTransactions,
        transactions,
        logout,
        sideNav,
        setSideNav,
        refreshUser: fetchUser,
        setAllUsers,
        setAllTransactions,
        allUsers,
        allTransactions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create a hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
