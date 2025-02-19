"use client";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { MdArrowBack, MdNotes } from "react-icons/md";
import CustomButton from "./CustomButton";
import { Sidebar } from "./AdminSideBar";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";

const AdminNav = () => {
  const router = useRouter();
  const {admin} = useUser();
  const [isMounted, setIsMounted] = useState(false);
  return (
    <div className="flex items-center p-4">
      <div
        onClick={() => setIsMounted(!isMounted)}
        className="md:hidden text-2xl font-bold px-3 py-3 bg-[#f5f5f5] rounded-full text-yellow"
      >
        <MdNotes />
      </div>

      <div
        className={`fixed z-40 inset-0 bg-transparent hidden ${isMounted && "flex"}`}
      >
        <div className="w-4/5 h-full">
          <Sidebar />
        </div>
        <div className="w-1/5 h-full" onClick={() => setIsMounted(!isMounted)} ></div>
      </div>

      <div className="flex gap-4 items-center w-full justify-end mx-4">
        <button
          onClick={() => router.back()}
          className="cursor-pointer w-10 h-10 mr-auto ml-3 hover:text-oyelaPrimary flex justify-center rounded-full bg-muted hover:bg-[#ebebeb] items-center"
        >
          <MdArrowBack size={24} color="#fcb42d" />
        </button>

        <div className="cursor-pointer italic font-semibold">{admin?.email}</div>
      </div>
    </div>
  );
};

export default AdminNav;
