"use client";
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";
import React from "react";
import {
  FaRegNewspaper,
  FaUsers,
  FaInbox,
  FaCompass,
  FaRegMoneyBillAlt,
  FaSignal,
  FaSuitcase,
  FaBriefcase,
  FaIdCard,
  FaPowerOff,
} from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { TbSpeakerphone } from "react-icons/tb";
import { logoutUser } from "@/utils/app";

const routes = [
  {
    title: "Fund",
    pages: [
      {
        label: "Deposit Funds",
        icon: FaInbox,
        color: "text-[#ff00c1]", // Neon pink
        href: "/deposits",
        route: "/deposits",
      },
      {
        label: "Withdraw Funds",
        icon: FaRegMoneyBillAlt,
        color: "text-[#ff00c1]", // Neon pink
        href: "/accounthistory?emsg=You have to perform 2 more trades to be eligible for withdrawal",
        route: "/withdraws",
      },
      {
        label: "User Fund Log",
        icon: FaRegNewspaper,
        color: "text-[#ff00c1]", // Neon pink
        href: "/accounthistory",
        route: "/accounthistory",
      },
    ],
  },
  {
    title: "Others",
    pages: [
      {
        label: "Purchase Signal",
        icon: FaSignal,
        color: "text-[#ff00c1]", // Neon pink
        href: "/signal",
        route: "/signal",
      },
      {
        label: "Upgrade Account",
        icon: FaSuitcase,
        color: "text-[#ff00c1]", // Neon pink
        href: "/buy-plan",
        route: "/buy-plan",
      },
      {
        label: "My Plans",
        icon: FaBriefcase,
        color: "text-[#ff00c1]", // Neon pink
        href: "/all-plans",
        route: "/all-plans",
      },
      {
        label: "Affiliate Program",
        icon: TfiTarget,
        color: "text-[#ff00c1]", // Neon pink
        href: "/referuser",
        route: "/referuser",
      },
      {
        label: "Verify Account",
        icon: FaIdCard,
        color: "text-[#ff00c1]", // Neon pink
        href: "/verify-account",
        route: "/verify-account",
      },
      {
        label: "Support",
        icon: TbSpeakerphone,
        color: "text-[#ff00c1]", // Neon pink
        href: "/support",
        route: "/support",
      },
      {
        label: "Logout",
        icon: FaPowerOff,
        action: logoutUser,
        color: "text-[#ff00c1]", // Neon pink
      },
    ],
  },
];

const SideBar = () => {
  const { setSideNav, sideNav, setUser } = useUser();
  return (
    <div
      className={`w-[25%] md:block bg-white overflow-auto md:sticky top-0  h-screen border py-4 px-4 ${
        sideNav ? "w-[100%] block z-40" : "hidden"
      }`}
    >
      <Link
        key={"iiiii"}
        className={`group text-[#333] font-medium flex items-center space-x-3 py-2 hover:text-[#FCB42D]`}
        href="/dashboard"
      >
        <span className="border border-[#00000050] text-[#00000090] group-hover:text-[#FCB42D] w-8 h-8 flex items-center justify-center rounded-full group-hover:border-[#FCB42D]">
          <FaCompass size={16} />
        </span>
        <span>Dashboard</span>
      </Link>

      {routes.map(({ pages, title }, id) => {
        return (
          <>
            <div key={id} className="">
              <div className="text-[#333] font-semibold text-lg py-2">
                {title}
              </div>
              {pages.map((i, index) =>
                i?.action ? (
                  <div
                    key={index}
                    className={`group text-[#333] font-medium flex items-center space-x-3 py-2 hover:text-[#FCB42D]`}
                    onClick={() => setUser(null)}
                  >
                    <span className="border border-[#00000050] text-[#00000090] group-hover:text-[#FCB42D] w-8 h-8 flex items-center justify-center rounded-full group-hover:border-[#FCB42D]">
                      <i.icon size={16} />
                    </span>
                    <span>{i?.label}</span>
                  </div>
                ) : (
                  <Link
                    key={index}
                    className={`group text-[#333] font-medium flex items-center space-x-3 py-2 hover:text-[#FCB42D]`}
                    href={i?.href}
                  >
                    <span className="border border-[#00000050] text-[#00000090] group-hover:text-[#FCB42D] w-8 h-8 flex items-center justify-center rounded-full group-hover:border-[#FCB42D]">
                      <i.icon size={16} />
                    </span>
                    <span>{i?.label}</span>
                  </Link>
                )
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideBar;
