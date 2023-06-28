import React from "react";

export const CandidateHero = () => {
  return (
    <div className="bg-[#FFF8F8] ff-dm-sans">
      <div className="max-w-[1320px] mx-auto px-4 text-center py-[90px]">
        <h1 className="text-[36px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[44px] sm:leading-[47px] md:leading-[62px] xl:leading-[86px] text-[#1E0E62] font-bold">
          Advance Your Career Now
        </h1>
        <p className="max-w-[450px] mt-[40px] mx-auto sm:text-[20px] lg:text-[22px] lg:leading-[32px] text-[#15141b66]  font-medium">
          Minka helps you find the job you want with the skills you need
        </p>
        <div className="justify-center flex mt-[42px]">
          <button className="max-w-[285px] w-full py-[11px] font-[500] bg-[#FF5757] rounded-[100px] md:text-[20px] leading-[26px] text-center text-[white]">
            Get Started
          </button>
          <button className="max-w-[285px] w-full text-[#FF5757] tracking-[-0.225px] md:text-[18px] leading-[26px]  font-[500]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
