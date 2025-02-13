import React from "react";

const AllPlansPage = () => {
  return (
    <div className="w-full p-5 bg-[#f9f9f9] h-full text-[#333]">
      <div className="flex flex-col items-center gap-6 bg-white p-16 px-8 md:px-16">
        <p className="text-center text-[13px] md:text-md">
          You do not have an investment plan at the moment or no value match
          your query.
        </p>

        <button
          type="button"
          class=" p-2 bg-yellow hover:bg-blue-700 text-white text-sm px-3"
        >
          Buy a plan
        </button>
       
      </div>
    </div>
  );
};

export default AllPlansPage;
