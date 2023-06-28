"use client";
import Checkbox from "@/components/common/icon/checkbox";
import React, { useState } from "react";
const ImageDescription = [
  { title: "Grow your salary", description: "apprentices in our community apprentices in our community apprentices in our community" },
  {
    title: "Learn on the job",
    description:
      "of  apprentices remain with their employer post-apprenticeship apprentices in our community",
  },
  {
    title: "Future facing skills",
    description: "of client expand their apprenticeship program apprentices in our apprentices in our community",
  },
];
const ImageDescription1 = [
  { title: "Grow your salary", description: "apprentices in our community apprentices in our apprentices in our community" },
  {
    title: "Learn on the job",
    description: "of  apprentices remain with  in our community apprentices in our community",
  },
  {
    title: "Future facing skills",
    description: "of client apprenticeship program apprentices in our community",
  },
];
const data = [
  { number: "10,000", description: "apprentices in our community" },
  {
    number: "93%",
    description:
      "of  apprentices remain with their employer post-apprenticeship",
  },
  {
    number: "77%",
    description: "of client expand their apprenticeship program",
  },
];
const cardData = {
  heading: "What is professional apprenticeship",
  items: [
    { tagline: "A modern way to hire and train talent for the feature" },
    { tagline: "A modern way to hire and train talent for the feature" },
    { tagline: "A modern way to hire and train talent for the feature" },
  ],
};
export const TransformingEmployer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="max-w-[1320px] mx-auto px-4 pt-[45px] ">
      <h2 className="text-[36px] cus-ff-DmSana sm:text-[40px] leading-[44px] sm:leading-[48px] text-[#1E0E62] font-medium tracking-[1px]">
        A better pathway to growth
      </h2>
      <p className="text-[16px] leading-[24px] text-[#6D6D8A] pt-[8px] tracking-[1px]">
        Transforming employers and individuals through professional
        apprenticeship.
      </p>
      <div className="inline-flex bg-[#CFF3E3] gap-x-[12px] items-center rounded-full my-[20px]">
        <div
          className={` px-[12px] rounded-full py-[8px]  ${
            activeTab === 0 ? "border-[2px] border-[#667AF0] bg-[#4ED297]" : ""
          }`}
        >
          <button
            className="text-[#1E0E62] text-[16px] leading-[24px] font-[600] "
            onClick={() => handleTabClick(0)}
          >
            Employers{" "}
          </button>
        </div>
        <div
          className={` px-[12px] rounded-full py-[8px] ${
            activeTab === 1 ? "border-[2px] border-[#667AF0] bg-[#4ED297]" : ""
          }`}
        >
          <button
            className="text-[#1E0E62] text-[16px] leading-[24px] font-[600] "
            onClick={() => handleTabClick(1)}
          >
            Individuals
          </button>
        </div>
      </div>
      <div className="md:flex  gap-[40px]">
        <div className="md:w-[65%]">
          <div>
            <img
              className="w-full h-full"
              src={
                activeTab === 0
                  ? `/images/employer-hero.png`
                  : `/images/Video.png`
              }
              alt=""
            />
          </div>
          {activeTab === 0 ? (
            <div className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-[40px]">
              {ImageDescription?.map((item, index) => (
                <div key={index} className="">
                  <span className="text-[20px] leading-[24px] text-[#1E0E62] font-medium tracking-[1px]">
                    {item?.title}
                  </span>
                  <p className="cus-text-color ">{item?.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-[40px]">
              {ImageDescription1?.map((item, index) => (
                <div key={index} className="">
                  <span className="text-[20px] leading-[24px] text-[#1E0E62] font-medium tracking-[1px]">
                    {item?.title}
                  </span>
                  <p className="cus-text-color ">{item?.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" md:w-[35%] mt-5 md:mt-0 relative">
          {activeTab === 0 ? (
            <div className="clip-card bg-[#4FD297] z-0 w-[200px] h-[200px]  top-[-50px] left-[-30px] absolute"></div>
          ) : (
            <div className="clip-card2 bg-[#59A1FF] z-0 w-[200px] h-[200px]  top-[-50px] left-[-30px] absolute"></div>
          )}
          <div className="z-10 relative">
            <div
              className={`${
                activeTab === 0 ? "bg-[#CFF3E3]" : "bg-[#D2E7FF]"
              }  p-[20px] rounded-[8px]`}
            >
              <h2 className="text-[20px] leading-[24px] text-[#1E0E62]  tracking-[1px] font-[600]">
                {cardData?.heading}
              </h2>
              <div className="pt-[10px]">
                {cardData?.items?.map((item, idx) => {
                  return (
                    <div key={idx} className="flex gap-x-[10px]">
                      <div className="pt-[6px]">
                        <Checkbox />
                      </div>
                      <p className="text-[#1E0E62] opacity-[0.8] font-[400]">
                        {item?.tagline}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y-[2px] py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-[40px]">
        {data?.map((item, index) => (
          <div key={index} className="text-center">
            <span className="text-[30px] leading-[36px] text-[#1E0E62] font-[600] tracking-[2px]">
              {item?.number}
            </span>
            <p className="cus-text-color ">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
