"use client";
import { useUser } from "@/contexts/UserContext";
import { makeTransaction } from "@/utils/app";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const DepositsPage = () => {
  const { setTransactions, transactions } = useUser();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "USDT",
    amount: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const transaction = await makeTransaction({ ...form, type: "deposit" });
  
      if (transaction?.transaction) {
        setTransactions((prevState) => [...transactions, transaction.transaction]);
  
        // Reset form only on success
        setForm({
          name: "USDT",
          amount: 0,
        });
      } else {
        console.warn("Transaction response missing expected data:", transaction);
      }
    } catch (error) {
      console.error("Transaction failed:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-black">
      <div>
        <Link href="/dashboard" className="text-yellow  hover:underline">
          Home
        </Link>{" "}
        / Deposits
      </div>

      <p className="text-[2.2rem] font-extrabold">Deposit</p>

      <div className="bg-white w-full p-4 mt-3 rounded mb-5">
        <h3 className="mb-4 text-[2rem] mt-2 font-bold">
          Select Payment method
        </h3>
        <form className="w-full flex flex-col gap-5" onSubmit={submit}>
          <div className="w-full">
            <select
              className="w-full border py-3 outline-none focus:ring-2 focus:ring-[#000]-400 focus:shadow-[0_0_8px_rgba(0,0,0,0.9)]"
              name="payment_method"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            >
              <option defaultValue value="USDT">
                USDT
              </option>
              <option value="Litecoin">Litecoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Bitcoin">Bitcoin</option>
            </select>
          </div>

          <div className="rounded-r rounded-tl  flex flex- items-stretch relative border-[#ced4da] w-full">
            <div className="flex text-left -mr-1">
              <span className="bg-[#e9ecef] rounded-[0.25rem] text-[#495057] font-normal px-3 py-2.5 border leading-[1.5rem]">
                USD
              </span>
            </div>
            <input
              type="number" 
              name="amount"
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              placeholder="Amount"
              id="IAmount"
              min="0"
              max="500000"
              className="w-full outline-none focus:ring-2 focus:ring-[#000]-400 focus:shadow-[0_0_8px_rgba(0,0,0,0.9)] appearance-auto bg-white flex-grow flex-shrink font-semibold overflow-clip px-4 text-start rounded-r py-3 border"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!(form?.amount > 0) || isSubmitting}
            className={`border w-fit px-8 lg:px-5 text-center py-2.5 uppercase text-sm lg:text-[14px] text-white font-medium bg-[#FCB42D] ${
              (!(form?.amount > 0) || isSubmitting) && "opacity-70"
            }`}
          >
            Continue
          </button>
        </form>
      </div>

      <div className="overflow-x-auto mt-3 w-full">
        <h3 className="mb-4 text-[2rem] mt-2 font-bold">Deposit History</h3>
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

export default DepositsPage;
