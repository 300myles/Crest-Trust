"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";  
import Loader from "@/components/Loader";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login"); // Redirect to login if user is not authenticated
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center">
          <div className="flex items-center justify-center w-full h-full">
          <Loader isLoading={isLoading} /> 
          </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
