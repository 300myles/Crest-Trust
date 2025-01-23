// pages/entrance.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TradingViewWidget from '@/components/TradingViewWidget';
import Image from "next/image";
import { useUser } from "@/contexts/UserContext";

const EntrancePage = () => {
  const router = useRouter();
  const { user, loading } = useUser(); // Access user context

  useEffect(() => {
    // Automatically redirect if the user is logged in
    if (!loading && user) {
      router.replace("/dashboard"); // Redirect to dashboard if logged in
    } else {
      router.replace("/login");
    }
  }, [loading, user, router]);

  // Show a loading indicator or entrance message while checking auth status
  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return null; // Return null or any other fallback if no UI is needed
};

export default EntrancePage;
