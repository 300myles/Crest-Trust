import "../globals.css";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import CoinWidget from "@/components/CoinWidget";
import ProtectedAuthRoute from "@/middleware/ProtectedAuthRoute";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedAuthRoute>
      <div className="h-screen w-full bg-white">
        <div className="w-full flex py-2.5 px-4 items-center justify-between bg-[#FCB42D]">
          <div className="inline-block">
            <Image src="/assets/logo.png" width={50} height={50} />
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-white/80 text-lg font-semibold">
              Hello, Emeka-Ugwu Kamsy Myles
            </span>
            <Image
              src="/assets/avatar.png"
              className="rounded-full"
              width={35}
              height={35}
            />
          </div>
        </div>

        <div className="h-10">
          <CoinWidget />
        </div>
        <div className="flex relative bg-[#f9f9f9]">
          <SideBar />
          <div className="w-full bg-[#f9f9f9] h-full">
            {children}

            <div className="px-5 text-black mt-10 text-sm mb-12">
              Copyright © Crest Trust Investment Company offers a simple and
              transparent mechanism for attracting investments and making
              profits.
            </div>
          </div>
        </div>
      </div>
    </ProtectedAuthRoute>
  );
};

export default DashboardLayout;
