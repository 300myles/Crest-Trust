import React from "react";
import { FaCopy, FaUser } from "react-icons/fa";

const ReferUserPage = () => {
  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-[#333]">
      <p className="text-[2rem] font-bold">
        Refer users to Crest Trust community
      </p>

      <div className="flex flex-col items-center gap-6 bg-white p-5 px-8 md:py-12">
        <p className="text-center text-sm font-bold md:text-base ">
          You can refer users by sharing your referral link:
        </p>

        <div class="mb-3 w-full flex items-center justify-center input-group">
          <input
            type="text"
            class="bg-[#e9ecef] w-[45%] text-base border rounded-tl-md py-3 px-4 border-[#ced4da]"
            value="support@cressttrustinv.orrg/ref/300myles"
            id="reflink"
            readonly=""
          />

          <div
            onClick="myFunction()"
            class="bg-transparent border border-[#6c757d] py-4 text-[#6c757d] px-4 text-md"
          >
            <FaCopy />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm font-bold md:text-base ">
            or your Referral ID
          </p>

          <p className="text-center text-[#28a745] text-md font-extrabold md:text-xl ">
            300myles
          </p>

          <p className="text-center text-md font-extrabold md:text-xl ">
            You were referred by
          </p>

          <div className="text-center gap-0.5 flex flex-col items-center  text-sm font-light ">
            <FaUser size={32} />
            null
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-start text-sm font-bold md:text-base ">
          Your Referrals.
        </p>

        <table className="w-full border border-gray-300 bg-white">
          <thead className="w-full">
            <tr className="border-b-2 grid grid-cols-5 w-full border-b-[#dee2e6] text-[#333]">
              <th className="px-4 py-3 ">Client name</th>

              <th className="px-4 py-3 border-l border-gray-200 ">Ref. level</th>

              <th className="px-4 py-3 border-x border-gray-200 ">
              Parent
              </th>

              <th className="px-4 py-3 border-x border-gray-200 ">
              Client status
              </th>

              <th className="px-4 py-3 min-w-[120px]">Date registered</th>
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
                  <span className="block items-center px-2 py-1 text-md text-center font-semibold text-[#333]">
                    <i className="fas fa-university mr-1"></i> Litecoin
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
      </div>
    </div>
  );
};

export default ReferUserPage;
