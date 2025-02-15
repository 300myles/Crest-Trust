import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Plans = [
  {
    name: "Bronze",
    minPrice: 500,
    maxPrice: 2999,
    props: [
      "Minimum amount: ₦500",
      "Maximum amount: ₦2,999",
      "5% Every 10 Minutes for 3 Days",
      " Charges Amount:",
      " Duration: 3 Days",
    ],
    percentage: 5,
  },
  {
    name: "Silver",
    minPrice: 3000,
    maxPrice: 9999,
    props: [
      "Minimum amount: ₦3,000",
      "Maximum amount: ₦9,999",
      "10% Every 30 Minutes for 5 Days",
      " Charges Amount:",
      " Duration: 5 Days",
    ],
    percentage: 10,
  },
  {
    name: "Gold",
    minPrice: 10000,
    maxPrice: 24999,
    props: [
      "Minimum amount: ₦10,000",
      "Maximum amount: ₦24,999",
      "15% Every 30 Minutes for 1 week",
      " Charges Amount:",
      " Duration: 1 week",
    ],
    percentage: 15,
  },
  {
    name: "Platinum B",
    minPrice: 25000,
    maxPrice: 49999,
    props: [
      "Minimum amount: ₦25,000",
      "Maximum amount: ₦49,999",
      "20% hourly for 1 month",
      " Charges Amount:",
      " Duration: 1 month",
    ],
    percentage: 20,
  },
  {
    name: "Platinum A",
    minPrice: 50000,
    maxPrice: 99999,
    props: [
      "Minimum amount: ₦50,000",
      "Maximum amount: ₦99,999",
      "25% Daily for 2 months",
      " Charges Amount:",
      " Duration: 2 months",
    ],
    percentage: 25,
  },
  {
    name: "Diamond",
    minPrice: 100000,
    maxPrice: 249999,
    props: [
      "Minimum amount: ₦100,000",
      "Maximum amount: ₦249,999",
      "30% Weekly for 5 months",
      " Charges Amount:",
      " Duration: 5 months",
    ],
    percentage: 30,
  },
  {
    name: "Titanium",
    minPrice: 250000,
    maxPrice: 1000000,
    props: [
      "Minimum amount: ₦250,000",
      "Maximum amount: ₦1,000,000",
      "35% Monthly for 8 months",
      " Charges Amount:",
      " Duration: 8 months",
    ],
    percentage: 35,
  },
  {
    name: "Couple Goal",
    minPrice: 1000,
    maxPrice: 1000000,
    props: [
      "Minimum amount: ₦1,000",
      "Maximum amount: ₦1,000,000",
      "20% Monthly for 8 months",
      " Charges Amount:",
      " Duration: 8 months",
    ],
    percentage: 20,
  },
];

const BuyPlanPage = () => {
  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-black">
      <div>
        <Link href="/dashboard" className="text-yellow  block hover:underline">
          Home
        </Link>
      </div>

      <p className="text-[2rem] font-bold">Upgrade your Account Plan</p>

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 p-4 mt-3 rounded mb-5">
        {Plans &&
          Plans.map((plan) => (
            <div className="flex bg-white h-fit flex-col just gap-3 text-center border px-5 py-3">
              <div className="text-yellow border-b border-b-[#00000020] pb-3">
                <h5 className="m-0 text-2xl text-center text-wrap font-bold">
                  {plan?.percentage} % ROI
                </h5>
                <h5 className="m-0 text-2xl text-center text-wrap font-extrabold ">
                  {plan?.name}
                </h5>
              </div>

              <ul className="flex flex-col gap-4 items-start">
                {plan?.props?.map((i) => (
                  <li className="text-[#333] text-wrap text-start text-md">
                    <FaCheck
                      color="#fcb42d"
                      style={{ display: "inline-block" }}
                    />{" "}
                    {i}
                  </li>
                ))}
              </ul>

              <input
                type="number"
                name="amount"
                placeholder={`₦ ${plan?.minPrice} - ₦ ${plan?.maxPrice}`}
                id="IAmount"
                min={plan?.minPrice}
                max={plan?.maxPrice}
                className="w-full outline-none focus:ring-2 focus:ring-[#000]-400 focus:shadow-[0_0_8px_rgba(0,0,0,0.9)] appearance-auto bg-white flex-grow flex-shrink font-semibold overflow-clip px-4 text-start rounded-md py-3 border"
                required=""
              />

              <button
                type="button"
                className="w-full p-2 bg-yellow hover:bg-blue-700 text-white text-sm"
              >
                Join Plan
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuyPlanPage;
