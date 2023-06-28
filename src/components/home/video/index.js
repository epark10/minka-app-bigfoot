"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const Video = () => {
  return (
    <div className="ff-dm-sans max-w-[1171px] mx-auto px-4 my-[40px] sm:my-[55px] md:my-[75px] lg:my-[100px] grid md:grid-cols-2 items-center">
      <div className="md:max-w-[411px]">
        <h2 className="text-[#1E0E62] tracking-[-0.4] text-[42px] font-bold leading-[52px]">
          Startup Framework
        </h2>
        <p className="text-[#15143966] mt-[30px] text-[22px] leading-8 font-medium">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design.{" "}
        </p>
      </div>
      <div className=" mt-[25px] md:mt-0">
        <ReactPlayer  width='100%' url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </div>
    </div>
  );
};
