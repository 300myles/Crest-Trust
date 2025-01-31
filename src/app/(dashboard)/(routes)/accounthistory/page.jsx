"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const AccountHistoryPage = () => {
  const searchParams = useSearchParams();
  const emsg = searchParams.get("emsg");
  console.log(emsg);

  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-black">
      <h3 className="text-[2rem] leading-[2rem] mt-2 font-bold">
        Account transactions history
      </h3>
      <h3 className="mb-3 text-md font-medium">
        All your transaction history in one place.
      </h3>

      {emsg && <div>{emsg}</div>}

      <div className="overflow-x-auto mt-7 w-full">
        <table className="w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-800 border-gray-200 text-white">
              <th className="px-4 py-2 w-1/3 min-w-[150px]">Details</th>
              <th className="px-4 py-2 w-1/3 border-x border-gray-200 min-w-[150px]">
                Method
              </th>
              <th className="px-4 py-2 w-1/3 min-w-[120px]">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 hover:bg-gray-100">
              <td className="px-4 py-2">
                <div className="font-semibold">100.00 USD</div>
                <span className="text-gray-500 text-sm">
                  Wed, Jan 15, 2025 2:01 AM
                </span>
              </td>
              <td className="px-4 border-x border-gray-400 py-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
                  <i className="fas fa-university mr-1"></i> Litecoin
                </span>
              </td>
              <td className="px-4 py-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-black bg-yellow-400 rounded">
                  <i className="fa fa-check mr-1"></i> Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountHistoryPage;
