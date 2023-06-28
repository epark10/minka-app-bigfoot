"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export const Hero = () => {
  const user = useSelector((state) => state?.user);
  console.log("user ????? >>>>>>>", user);
  return (
    <>
      {user?.candidateProfile ? (
        <div className="bg-[#FFF8F8] ff-dm-sans">
          <div className="max-w-[1320px] mx-auto px-4 text-center py-[90px]">
            <h1 className="text-[36px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[44px] sm:leading-[47px] md:leading-[62px] xl:leading-[86px] text-[#1E0E62] font-bold">
              Advance Your Career Now
            </h1>
            <p className="max-w-[450px] mt-[40px] mx-auto sm:text-[20px] lg:text-[22px] lg:leading-[32px] text-[#15141b66]  font-medium">
              Minka helps you find the job you want with the skills you need
            </p>
            <div className="justify-center flex mt-[42px]">
              <button className="max-w-[285px] w-full py-[11px] font-[500] hover:bg-[#f93c3c] transition-all duration-150 ease-in-out bg-[#FF5757] rounded-[100px] md:text-[20px] leading-[26px] text-center text-[white]">
                Get Started
              </button>
              <button className="max-w-[285px] w-full ">
                  <p className="text-[#FF5757] border-b-[2px] inline-block border-[#FFF8F8] transition-all duration-150 ease-in-out hover:border-[#FF5757] tracking-[-0.225px] md:text-[18px] leading-[26px]  font-[500]">
                    Learn more
                  </p>
                </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#FFF8F8] ff-dm-sans">
          <div className="max-w-[1320px] mx-auto px-4 md:flex py-[25px] md:py-[42px] gap-x-[20px]">
            <div className="w-full md:w-[40%]">
              <h1 className="text-[36px] sm:text-[40px] md:text-[52px] lg:text-[64px] xl:text-[72px] leading-[44px] sm:leading-[47px] md:leading-[62px] xl:leading-[86px] text-[#1E0E62] font-bold">
                Advance Your Career Now
              </h1>
              <p className="max-w-[400px] sm:text-[20px] lg:text-[22px] lg:leading-[32px] text-[#15141b66]  font-medium">
                Minka helps you find the job you want with the skills you need
              </p>
              <div className="flex mt-[42px]">
                <button className="max-w-[285px] w-full py-[11px] font-[500] hover:bg-[#f93c3c] transition-all duration-150 ease-in-out bg-[#FF5757] rounded-[100px] md:text-[20px] leading-[26px] text-center text-[white]">
                  Get Started
                </button>
                <button className="max-w-[285px] w-full ">
                  <p className="text-[#FF5757] border-b-[2px] inline-block border-[#FFF8F8] transition-all duration-150 ease-in-out hover:border-[#FF5757] tracking-[-0.225px] md:text-[18px] leading-[26px]  font-[500]">
                    Learn more
                  </p>
                </button>
              </div>
            </div>
            <div className="w-full md:w-[60%] mt-[25px] md:mt-0">
              <Image
                src="/images/employer-hero.png"
                alt="employer hero"
                className="w-full h-full"
                width={772}
                height={434}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
