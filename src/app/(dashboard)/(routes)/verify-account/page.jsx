import React from "react";
import { FaCopy } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

const VerifyPage = () => {
  return (
    <div className="w-full p-5 bg-[#f9f9f9] px-12 md:px-52 h-full text-[#333]">
      <p className="text-[2rem] text-center font-bold">KYC Verification</p>

      <p className="text-center text-sm font-normal md:text-base ">
        To comply with regulation, each participant will have to go through
        indentity verification (KYC/AML) to prevent fraud causes.
      </p>

      <div className="flex flex-col items-center gap-6 mt-6 shadow-lg bg-white p-5 px-8 md:py-12">
        <div className="p-8 bg-[#f8f9fa] rounded-full">
          <FaCopy size={70} color="#333" />
        </div>

        <p className="text-center text-sm font-normal md:text-base ">
          You have not submitted your necessary documents to verify your
          identity. In order to enjoy our investment system, please verify your
          identity.
        </p>

        <button
          type="button"
          class=" p-2 bg-yellow hover:bg-blue-700 text-white text-sm px-3"
        >
          Click here to complete your KYC
        </button>
      </div>

      <div className="flex items-center gap-6 mt-12 shadow-lg bg-white p-5 px-4 md:py-8">
        <div className="p-4 bg-[#f8f9fa] rounded-full">
          <IoIosMailOpen size={70} color="#333" />
        </div>

        <div className="w-4/5">
          <p className="text-2xl text-center font-bold">We’re here to help you!</p>

          <p className="text-center text-sm font-normal md:text-base ">
          Ask a question, manage request, report an issue. Our support team will get back to you by email.
          </p>
        </div>

        <button
          type="button"
          class=" p-2 border border-yellow hover:bg-blue-700 text-[#333] font-normal text-sm px-3"
        >
          Get support now
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
