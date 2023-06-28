import React from "react";

export const Congrats = () => {
  return (
    <div className="bg-[#fff8ff] h-screen pt-[44px] px-4">
      <div className=" max-w-[1040px] mx-auto bg-white rounded-[10px] px-4 sm:px-[60px] md:px-[70px] lg:px-[105px] py-[40px] sm:py-[60px] md:py-[130px] lg:py-[166px] shadow-md">
        <p className="ff-dm-sans text-[19px] sm:text-[32px] md:text-[42px] leading-[52px] tracking-[-0.4px] font-[700] text-[#1E0E62] text-center ">
          Congrats 🎉
        </p>
        <p className="f-dm-sans text-[15px] sm:text-[19px] md:text-[32px] md:leading-[42px] font-[700] text-[#1E0E62] mt-[4px] text-center">
          You’ve completed your Minka profile! One of our career advocates will
          get in touch shortly. In the meantime, feel free to email us any
          concerns at support@heyminka.com
        </p>
      </div>
    </div>
  );
};
