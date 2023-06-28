"use client";
import React from "react";

export const DefaultInput = ({ appendClassNames, error, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        className={`${appendClassNames ?? ""} ${
          error ? "border-red-500" : "border-[#EBEAED]"
        } w-full pl-6 pr-[10px]  py-[18px] border-2 rounded-[100px]  mb-[20px] text-[20px] font-medium leading-[26px] placeholder:text-[#15143966] placeholder:text-opacity-40 focus:outline-none `}
      />
    </>
  );
};
