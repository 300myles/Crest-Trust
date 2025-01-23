import "../globals.css";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import CoinWidget from "@/components/CoinWidget";
import ProtectedAuthRoute from "@/middleware/ProtectedAuthRoute";

const DashboardLayout = ({ children }) => {
  return (
    <ProtectedAuthRoute>
      <div className="h-screen w-full">
        <div className="w-full flex py-2.5 px-4 items-center justify-between bg-[#FCB42D]">
          <div className="inline-block bg-black">
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
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </div>
    </ProtectedAuthRoute>
  );
};

export default DashboardLayout;
