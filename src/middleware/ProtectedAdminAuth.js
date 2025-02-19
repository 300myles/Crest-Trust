"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { ImSpinner2 } from "react-icons/im";
import Loader from "@/components/Loader";

const ProtectedAdminAuth = ({ children }) => {
  const { admin, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !admin) {
      router.push("/admin/dashboard"); // Redirect to login if admin is not authenticated
    }
  }, [admin, loading, router]);

  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="flex items-center justify-center w-full h-full">
          <Loader isLoading={loading} /> 
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedAdminAuth;
