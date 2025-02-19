"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const AccountHistoryPage = () => {
  const searchParams = useSearchParams();
  const emsg = searchParams.get("emsg");
  const [selected, setSelected] = useState("deposit");

  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-black">
      <h3 className="text-[2rem] leading-[2rem] mt-2 font-bold">
        Account transactions history
      </h3>
      <h3 className="mb-3 text-md font-medium">
        All your transaction history in one place.
      </h3>

      {emsg && (
        <div className="bg-[#f8d7da] border border-[#f5c6cb] flex items-start text-[#721c24]">
          <div>
            <sapn></sapn>
            <span>{emsg}</span>
          </div>

          <div></div>
        </div>
      )}

      <div className="overflow-x-auto mt-7 w-full">
        <div className="flex items-center justify-between mb-6 space-x-4">
          <div
            onClick={() => setSelected("deposit")}
            className={`capitalize w-1/3 border-t-4 border-t-[#146092] text-center text-lg font-extrabold text-[#333] px-4 py-3 cursor-pointer ${
              selected !== "deposit" && "border-t-[#EDEDED] bg-[#EDEDED]"
            }`}
          >
            Deposit
          </div>

          <div
            onClick={() => setSelected("withdrawal")}
            className={`capitalize w-1/3 border-t-4 border-t-[#146092] text-center text-lg font-extrabold text-[#333] px-4 py-3 cursor-pointer ${
              selected !== "withdrawal" && "border-t-[#EDEDED] bg-[#EDEDED]"
            }`}
          >
            withdrawal
          </div>

          <div
            onClick={() => setSelected("others")}
            className={`capitalize w-1/3 border-t-4 border-t-[#146092] text-center text-lg font-extrabold text-[#333] px-4 py-3 cursor-pointer ${
              selected !== "others" && "border-t-[#EDEDED] bg-[#EDEDED]"
            }`}
          >
            Others
          </div>
        </div>

        {selected === "deposit" && (
          <table className="w-full border border-gray-300 bg-white">
            <thead className="w-full">
              <tr className="border-b-2 grid grid-cols-4 w-full border-b-[#dee2e6] text-[#333]">
                <th className="px-4 py-3 ">Amount</th>

                <th className="px-4 py-3 border-l border-gray-200 ">
                  Payment Mode
                </th>

                <th className="px-4 py-3 border-x border-gray-200 ">Status</th>

                <th className="px-4 py-3 min-w-[120px]">Date created</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2 grid grid-cols-4 items-center border-gray-300 ">
                <td className="px-4 py-2">
                  <span className="block px-2 py-1 text-md text-center font-semibold text-[#333]">
                    &#x20A6;100
                  </span>
                </td>

                <td className="px-4 py-2">
                  <span className="block items-center px-2 py-1 text-md text-center font-semibold text-[#333]">
                    <i className="fas fa-university mr-1"></i> Litecoin
                  </span>
                </td>

                <td className="px-4 text-center py-2">
                  <span className="inline-flex text-center self-center px-2 py-1 text-xs font-semibold text-white bg-yellow rounded">
                    <i className="fas fa-university mr-1"></i> Pending
                  </span>
                </td>

                <td className="px-4 py-2">
                  <span className="block text-gray-500 text-sm">
                    Wed, Jan 15, 2025 2:01 AM
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {selected === "others" && (
          <table className="w-full border border-gray-300 bg-white">
            <thead className="w-full">
              <tr className="border-b-2 grid grid-cols-4 w-full border-b-[#dee2e6] text-[#333]">
                <th className="px-4 py-3 ">Amount</th>

                <th className="px-4 py-3 border-l border-gray-200 ">Type</th>

                <th className="px-4 py-3 border-x border-gray-200 ">
                  Plan/Narration
                </th>

                <th className="px-4 py-3 min-w-[120px]">Date created</th>
              </tr>
            </thead>

            {null && (
              <tbody>
                <tr className="border-b-2 grid grid-cols-4 items-center border-gray-300 ">
                  <td className="px-4 py-2">
                    <span className="block px-2 py-1 text-md text-center font-semibold text-[#333]">
                      &#x20A6;100
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    <span className="block items-center px-2 py-1 text-md text-center font-semibold text-[#333]">
                      <i className="fas fa-university mr-1"></i> Litecoin
                    </span>
                  </td>

                  <td className="px-4 text-center py-2">
                    <span className="inline-flex text-center self-center px-2 py-1 text-xs font-semibold text-white bg-yellow rounded">
                      <i className="fas fa-university mr-1"></i> Pending
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    <span className="block text-gray-500 text-sm">
                      Wed, Jan 15, 2025 2:01 AM
                    </span>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        )}

        {selected === "withdrawal" && (
          <table className="w-full border border-gray-300 bg-white">
            <thead className="w-full">
              <tr className="border-b-2 grid grid-cols-5 w-full border-b-[#dee2e6] text-[#333]">
                <th className="px-4 py-3 ">Amount requested</th>

                <th className="px-4 py-3 border-l border-gray-200 ">
                  Amount + charges
                </th>

                <th className="px-4 py-3 border-l border-gray-200 ">
                  Recieving mode
                </th>

                <th className="px-4 py-3 border-x border-gray-200 ">Status</th>

                <th className="px-4 py-3 min-w-[120px]">Date created</th>
              </tr>
            </thead>

            {null && (
              <tbody>
                <tr className="border-b-2 grid grid-cols-5 items-center border-gray-300 ">
                  <td className="px-4 py-2">
                    <span className="block px-2 py-1 text-md text-center font-semibold text-[#333]">
                      &#x20A6;100
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    <span className="block px-2 py-1 text-md text-center font-semibold text-[#333]">
                      &#x20A6;150
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    <span className="block items-center px-2 py-1 text-md text-center font-semibold text-[#333]">
                      <i className="fas fa-university mr-1"></i> Litecoin
                    </span>
                  </td>

                  <td className="px-4 text-center py-2">
                    <span className="inline-flex text-center self-center px-2 py-1 text-xs font-semibold text-white bg-yellow rounded">
                      <i className="fas fa-university mr-1"></i> Pending
                    </span>
                  </td>

                  <td className="px-4 py-2">
                    <span className="block text-gray-500 text-sm">
                      Wed, Jan 15,
                      <div>2025 2:01 AM</div>
                    </span>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default AccountHistoryPage;
