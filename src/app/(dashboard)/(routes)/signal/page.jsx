import Link from "next/link";
import React from "react";

const Plans = [
  {
    name: "Monentum Signals",
    price: 1300,
    percentage: 63,
  },
  {
    name: "Breakout Signals",
    price: 3000,
    percentage: 68.7,
  },
  {
    name: "Buying Oversold",
    price: 3800,
    percentage: 75,
  },
  {
    name: "Trend Signal",
    price: 4000,
    percentage: 78.4,
  },
  {
    name: "BTC Miner S9 Data Circuit",
    price: 5000,
    percentage: 83.4,
  },
  {
    name: "AntMiner-S7-4.8THs-1250w",
    price: 5300,
    percentage: 85.4,
  },
  {
    name: "S9 Mining Hardware ASIC Hash",
    price: 6000,
    percentage: 87.5,
  },
  {
    name: "Bitfury-B8-Bitcoin-50-THS",
    price: 7000,
    percentage: 93.4,
  },
];

const SignalPage = () => {
  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-black">
      <div>
        <Link href="/dashboard" className="text-yellow  block hover:underline">
          Home
        </Link>
        <Link href="" className="text-[#6c757d] block ml-3 ">
          / Signal
        </Link>
      </div>

      <p className="text-[2rem] font-bold">Make Deposit</p>

      <div className="w-full grid grid-cols-4 gap-6 p-4 mt-3 rounded mb-5">
        {Plans &&
          Plans.map((plan) => (
            <div className="flex bg-white h-fit flex-col just text-center border">
              <div className="bg-[#EBEDED] text-blue-500 font-extrabold px-5 py-3">
                <h5 className="m-0 text-xl text-wrap">{plan?.name}</h5>
              </div>
              <div className="text-wrap  p-0">
                <h5 className="font-bold text-xl border-y border-y-[#00000020] text-[#333] text-center py-4">
                  {" "}
                  Signal Price: ₦ {plan?.price}
                </h5>
                <h5 className="border-y text-md border-y-[#00000020] text-[#333] text-center py-3">
                  Percentage:
                  <div className="">{plan?.percentage}%</div>
                </h5>
              </div>

              <button
                type="button"
                className="w-full p-2 bg-yellow hover:bg-blue-700 text-white text-sm"
              >
                Subscribe Now
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SignalPage;
