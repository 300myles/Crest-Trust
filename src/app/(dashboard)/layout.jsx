"use client";
import "../globals.css";
import SideBar from "@/components/SideBar";
import hamburger from "../../assets/hamburger.svg";
import Image from "next/image";
import CoinWidget from "@/components/CoinWidget";
import ProtectedRoute from "@/middleware/ProtectedRoute";
import { useUser } from "@/contexts/UserContext";

const DashboardLayout = ({ children }) => {
  const { setSideNav, sideNav, user } = useUser();

  return (
    <ProtectedRoute>
      <div className="h-screen w-full bg-white">
        <div className="w-full flex py-2.5 px-4 items-center justify-between bg-[#FCB42D]">
          <div className="inline-block">
            <Image src="/assets/logo.png" alt="Crest Trust" width={50} height={50} />
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <span className="text-white/80 text-lg font-semibold">
              Hello, {user?.name}
            </span>
            <Image
            alt=""
              src="/assets/avatar.png"
              className="rounded-full"
              width={35}
              height={35}
            />
          </div>

          <div
          onClick={() => setSideNav(!sideNav)}
          className="flex md:hidden items-center justify-center py-2 px-4"
        >
          <Image
            src={hamburger}
            className="w-5 h-5 object-contain"
            width={8}
            height={8}
            alt="NearSwipe"
          />
        </div>
        </div>

        <div className="h-10">
          <CoinWidget />
        </div>
        <div className="flex relative bg-[#f9f9f9]">
          <SideBar />
          <div className={`w-full bg-[#f9f9f9] h-full ${sideNav && "hidden"}`}>
            {children}

            <div className="px-5 text-black mt-10 text-[12px] md:text-sm mb-12">
              Copyright © Crest Trust Investment Company offers a simple and
              transparent mechanism for attracting investments and making
              profits.
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
