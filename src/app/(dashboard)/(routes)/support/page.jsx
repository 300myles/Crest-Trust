"use client";
import Link from "next/link";
import React, { useState } from "react";

const SupportPage = () => {
  const [message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    alert(message);
  };
  return (
    <div className="w-full p-5 bg-white flex items-center flex-col  py-8 lg:py-16 px-6  h-full text-[#333]">
      <div className="w-full lg:w-3/5 flex flex-col gap-2">
        <p className="text-[2.4rem] text-center font-extrabold">
          Crest Trust Support
        </p>

        <p className="text-xl text-center font-medium">
          For inquiries, suggestions or complains. Mail us
        </p>

        <Link
          href="#"
          className="text-2xl text-center font-medium text-yellow hover:underline hover:text-blue-600"
        >
          support@cressttrustinv.org
        </Link>

        <form className="mt-6" onSubmit={submit}>
          <label htmlFor="message" className="text-xl font-bold">
            Message<span className="text-[#dc3545]">*</span>
          </label>

          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-[#495057] border-[#ced4da] px-4 py-3 min-h-40 mt-2 text-base border rounded-t-md outline-none focus:ring-2 focus:ring-[#000]-400 focus:shadow-[0_0_8px_rgba(0,0,0,0.9)] appearance-auto bg-white"
          />

          <button
            type="submit"
            disabled={!message}
            className{`w-full p-2 mt-12 bg-yellow hover:bg-blue-700 text-white text-sm ${
              !message && "opacity-70 cursor-not-allowed"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
