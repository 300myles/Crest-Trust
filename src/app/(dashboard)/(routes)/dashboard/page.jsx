import TradingViewWidget from "@/components/TradingViewWidget";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full p-5 h-full">
      <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="w-full flex rounded-lg h-24 bg-[#30B9BA] border-black">
          <div className="w-4/5 flex flex-col justify-between p-5 h-full">
            <div className="font-roboto font-semibold text-2xl text-white">
              &#x20A6;0.00
            </div>
            <div className="text-[12px] text-white/60 font-roboto font-semibold">
              Deposits
            </div>
          </div>
          <div className="w-1/5 bg-[#12aaaa] flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl">
            &#36;
          </div>
        </div>

        <div className="w-full flex rounded-lg h-24 bg-[#28a745] border-black">
          <div className="w-4/5 flex flex-col justify-between p-5 h-full">
            <div className="font-roboto font-semibold text-2xl text-white">
              &#x20A6;0.00
            </div>
            <div className="text-[12px] text-white/60 font-roboto font-semibold uppercase">
              profit
            </div>
          </div>
          <div className="w-1/5 bg-black/20 flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl">
            &#36;
          </div>
        </div>

        <div className="w-full flex rounded-lg h-24 bg-[#dc3545] border-black">
          <div className="w-4/5 flex flex-col justify-between p-5 h-full">
            <div className="font-roboto font-semibold text-2xl text-white">
              &#x20A6;0.00
            </div>
            <div className="text-[12px] text-white/60 font-roboto font-semibold uppercase">
              Total withdrawal
            </div>
          </div>
          <div className="w-1/5 bg-black/20 flex items-center justify-center text-center font-roboto text-2xl text-white font-semibold h-full rounded-r-xl">
            &#36;
          </div>
        </div>
      </div>

      <div className="w-full border-[#ced4da] grid grid-cols-1 gap-8 mt-6 md:grid-cols-3">
        <div className="md:col-span-2 h-full border">
          <TradingViewWidget />
        </div>

        <div className="md:col-span-1 text-[#212529] border bg-[#fff] rounded-md p-6 py-7">
          <p className="text-2xl font-bold mb-[1rem]">Assets</p>

          <div className="mb-[1rem] rounded-r rounded-tl relative flex items-center  border border-[#ced4da] w-full">
            <select
              color="#212529"
              className="outline-none focus-within:hover:outline-primary outline rounded-r rounded-tl w-full px-4 py-3 font-bold"
              name="asset"
              id="select_assetss"
              required=""
            >
              <optgroup className="text-500" label="Currency">
                <option selected="">EURUSD</option>
                <option>EURJPY</option>
                <option>USDJPY</option>
                <option>USDCAD</option>
                <option>AUDUSD</option>
                <option>AUDJPY</option>
                <option>NZDUSD</option>
                <option>GBPUSD</option>
                <option>GBPJPY</option>
                <option>USDCHF</option>
              </optgroup>
              <optgroup label="Crypto-Currency">
                <option>BTCUSD</option>
                <option>ETHUSD</option>
                <option>BCHUSD</option>
                <option>XRPUSD</option>
                <option>LTCUSD</option>
                <option>ETHBTC</option>
              </optgroup>
              <optgroup label="Stocks">
                <option>CITI</option>
                <option>SNAP</option>
                <option>EA</option>
                <option>MSFT</option>
                <option>CSCO</option>
                <option>GOOG</option>
                <option>FB</option>
                <option>SBUX</option>
                <option>INTC</option>
              </optgroup>
              <optgroup label="Indices">
                <option>SPX500USD</option>
                <option>MXX</option>
                <option>XAX</option>
                <option>INDEX:STI</option>
              </optgroup>
              <optgroup label="Commodities">
                <option>GOLD</option>
                <option>RB1!</option>
                <option>USOIL</option>
                <option>SILVER</option>
              </optgroup>
            </select>
            {/* <Image src="/assets/select.svg" className="absolute p-2 w-7 right-0 bg-white border border-black" width={12} height={12} alt="" /> */}
          </div>

          <div className="mb-[1rem] rounded-r rounded-tl outline-none focus-within:outline-primary outline flex flex- items-stretch relative border-[#ced4da] w-full">
            <div class="flex text-left -mr-1">
              <span class="bg-[#e9ecef] rounded-[0.25rem] text-[#495057] font-normal px-3 py-2.5 border leading-[1.5rem]">
                USD
              </span>
            </div>
            <input
              type="number"
              name="amount"
              placeholder="Invest Amount(0.00)"
              id="IAmount"
              min="50"
              max="500000"
              className="w-full outline-0 appearance-auto bg-white flex-grow flex-shrink font-semibold overflow-clip px-4 text-start rounded-r py-3 border"
              required=""
            />
          </div>

          <div className="mb-[1rem] rounded-r rounded-tl relative flex items-center  border border-[#ced4da] w-full">
            <select
              color="#212529"
              className="rounded-r outline-none focus-within:hover:outline-primary outline rounded-tl w-full px-4 py-3 font-bold"
              name="leverage"
              id="leverage"
              required=""
            >
              <option selected="" disable="" value="">
                Leverage
              </option>
              <option value="10">1:10</option>
              <option value="20">1:20</option>
              <option value="30">1:30</option>
              <option value="40">1:40</option>
              <option value="50">1:50</option>
              <option value="60">1:60</option>
              <option value="70">1:70</option>
              <option value="80">1:80</option>
              <option value="90">1:90</option>
              <option value="100">1:100</option>
            </select>
          </div>

          <div className="mb-[1rem] rounded-r rounded-tl relative flex items-center  border border-[#ced4da] w-full">
            <select
              color="#212529"
              className="rounded-r outline-none focus-within:hover:outline-primary outline rounded-tl w-full px-4 py-3 font-bold"
              name="expire"
              id="expire"
              required=""
            >
              <option selected="" disable="" value="">
                Expiration
              </option>
              <option value="1 Minutes">1 Minute</option>
              <option value="5 Minutes">5 Minutes</option>
              <option value="15 Minutes">15 Minutes</option>
              <option value="30 Minutes">30 Minutes</option>
              <option value="60 Minutes">1 Hour</option>
              <option value="4 Hours">4 Hours</option>
              <option value="1 Days">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="7 Days">7 Days</option>
            </select>
          </div>

          <div className="flex items-center w-full mt-4 gap-7 justify-between">
            <div className="border w-full text-center py-2 uppercase text-sm text-white font-semibold bg-[#28a745]">
              buy
            </div>

            <div className="border w-full text-center py-2 uppercase text-sm text-white font-semibold bg-[#dc3545]">
              sell
            </div>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 gap-8 md:grid-cols-2 text-[#212529] rounded-md ">
          <div className="col-span-1 text-[#212529]">
            <div className="bg-[#fff] rounded-md py-4 border">
              <div className="px-4 capitalize text-2xl font-bold">
                latest trades
              </div>
              <div className="bg-[#0000000d] flex justify-between items-start p-3 text-black">
                <div className="w-1/3 font-bold">Details</div>
                <div className="w-1/3 font-bold">Amount</div>
                <div className="w-1/3 font-bold">Status</div>
              </div>
            </div>

            <div className="border w-full mt-4 text-center py-2 capitalize text-sm text-white font-normal bg-[#17a2b8]">
              view all
            </div>
          </div>

          <div className="col-span-1 text-[#212529]">
            <div className="bg-[#fff] rounded-md py-6 border">
              <div className="px-5 capitalize text-[27px] font-bold">
                personal referral link:
              </div>

              <div className="flex items-center mt-2 px-5 w-full text-black">
                <input
                  type="text"
                  class="w-full border text-sm border-[#ced4da] border-r-0 rounded-tl-md text-[#495057] font-semibold px-3 py-3"
                  placeholder="Link"
                  value="support@cressttrustinv.org/ref/300myles"
                />

                <button
                  class="h-full rounded-r-md text-sm bg-[#ffc107] px-4 py-[13px]"
                  onclick="copyFunction('support@cressttrustinv.org/ref/300myles')"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="px-5 w-full bg-white mt-8 py-3">
              <div className="capitalize text-[27px] font-bold">referrals</div>

              <div className=" text-black/50 text-sm md:text-md my-2">
                Present our project to your friends, family, or any other
                community and enjoy the financial benefits. You don't even need
                an active deposit to receive affiliate commission.
              </div>

              <div className="border w-fit px-8 mt-4 text-center py-2 capitalize text-sm  font-normal bg-[#ffc107]">
                learn more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
