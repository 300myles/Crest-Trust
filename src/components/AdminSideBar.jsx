"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiFillHome } from "react-icons/ai";
import { FaRegNewspaper, FaUsers } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

const routes = [
  {
    label: "Home",
    icon: AiFillHome,
    color: "text-[#ff00c1]", // Neon pink
    href: "/admin/dashboard",
    route: "",
  },
  {
    label: "Users",
    icon: FaUsers,
    color: "text-[#ff00c1]", // Neon pink
    href: "/admin/dashboard/users",
    route: "/admin/dashboard/users/:id",
  },
  {
    label: "Transactions",
    icon: FaUsersLine,
    color: "text-[#ff00c1]", // Neon pink
    href: "/admin/dashboard/transactions",
    route: "/admin/dashboard/transactions/6",
  },
  //   {
  //     label: "Blogs",
  //     icon: FaRegNewspaper,
  //     color: "text-[#ff00c1]", // Neon pink
  //     href: "/blogs/view",
  //     route: "/blogs/view",
  //   },
  // {
  //   label: "Settings",
  //   icon: MdSettings,
  //   color: "text-[#9600ff]", // Purple
  //   href: "/settings",
  //   route: "/settings",
  // },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="space-y-4 text-[#333] py-4 flex flex-col h-full bg-[#ffffff] shadow-lg">
      <div className="flex-1 px-3 py-2">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-10 text-oyelaPrimary"
        >
          <div className="flex text-[#333] justify-center items-center space-x-4 text-lg uppercase font-extrabold">
            <Image
              className=""
              width={37}
              height={37}
              src="/assets/logo.png"
              alt=""
            />
            <span>Crest Trust Admin</span>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition ${
                pathname === route.href || pathname === route.route
                  ? " bg-[#ececec] hover:bg-[#ececec]/70" // Active tab with neon pink highlight
                  : " hover:bg-[#ececec]"
              }`}
            >
              <div className="flex items-center font-[700] flex-1">
                <route.icon className={`h-6 w-6 mr-3 text-yellow`} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
