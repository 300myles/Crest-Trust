import Link from "next/link";
import React from "react";
import {
  FaRegNewspaper,
  FaUsers,
  FaInbox,
  FaCompass,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

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
        icon: FaUsers,
        color: "text-[#ff00c1]", // Neon pink
        href: "/users",
        route: "/users/:id",
      },
      {
        label: "Upgrade Account",
        icon: FaUsers,
        color: "text-[#ff00c1]", // Neon pink
        href: "/coaches",
        route: "/coaches/6",
      },
      {
        label: "My Plans",
        icon: FaRegNewspaper,
        color: "text-[#ff00c1]", // Neon pink
        href: "/blogs/view",
        route: "/blogs/view",
      },
      {
        label: "Affiliate Program",
        icon: FaUsers,
        color: "text-[#ff00c1]", // Neon pink
        href: "/coaches",
        route: "/coaches/6",
      },
      {
        label: "Verify Account",
        icon: FaRegNewspaper,
        color: "text-[#ff00c1]", // Neon pink
        href: "/blogs/view",
        route: "/blogs/view",
      },
      {
        label: "Profit History",
        icon: FaUsers,
        color: "text-[#ff00c1]", // Neon pink
        href: "/coaches",
        route: "/coaches/6",
      },
      {
        label: "Support",
        icon: FaRegNewspaper,
        color: "text-[#ff00c1]", // Neon pink
        href: "/blogs/view",
        route: "/blogs/view",
      },
      {
        label: "Logout",
        icon: FaRegNewspaper,
        color: "text-[#ff00c1]", // Neon pink
        href: "/blogs/view",
        route: "/blogs/view",
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="w-[25%] bg-white overflow-auto sticky top-0  h-full border py-4 px-4">
      <Link
        className={`group text-[#333] font-medium flex items-center space-x-3 py-2 hover:text-[#FCB42D]`}
        href="/dashboard"
      >
        <span className="border border-[#00000050] text-[#00000090] group-hover:text-[#FCB42D] w-8 h-8 flex items-center justify-center rounded-full group-hover:border-[#FCB42D]">
          <FaCompass size={16} />
        </span>
        <span>Dashboard</span>
      </Link>

      {routes.map(({ pages, title }) => {
        return (
          <>
            <div className="">
              <div className="text-[#333] font-semibold text-lg py-2">
                {title}
              </div>
              {pages.map((i) => (
                <Link
                  className={`group text-[#333] font-medium flex items-center space-x-3 py-2 hover:text-[#FCB42D]`}
                  href={i?.href}
                >
                  <span className="border border-[#00000050] text-[#00000090] group-hover:text-[#FCB42D] w-8 h-8 flex items-center justify-center rounded-full group-hover:border-[#FCB42D]">
                    <i.icon size={16} />
                  </span>
                  <span>{i?.label}</span>
                </Link>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SideBar;
