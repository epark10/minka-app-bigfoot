"use client";
import { Comma } from "@/components/icons/comma";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const data = [
  {
    img: "/images/employer-hero.png",
    title: "Jessy Kirk designmodo",
    description:
      "The most important part of the startup framework is the samples.The samples from a set of 25 usable pages you can use as is or you can add new blocks form UI kit.",
  },
  {
    img: "/images/employer-hero.png",
    title: "Jessy Kirk designmodo",
    description:
      "The most important part of the startup framework is the samples.The samples from a set of 25 usable pages you can use as is or you can add new blocks form UI kit.",
  },
  {
    img: "/images/employer-hero.png",
    title: "Jessy Kirk designmodo",
    description:
      "The most important part of the startup framework is the samples.The samples from a set of 25 usable pages you can use as is or you can add new blocks form UI kit.",
  },
  {
    img: "/images/employer-hero.png",
    title: "Jessy Kirk designmodo",
    description:
      "The most important part of the startup framework is the samples.The samples from a set of 25 usable pages you can use as is or you can add new blocks form UI kit.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" ff-dm-sans w-full mt-[75px] max-w-[1320px] mx-auto py-[30px] sm:py-[45px] rounded-[8px] bg-[#FFF8F8]">
      <div className="mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[60px]  max-w-[1170px] px-8 mx-auto  overflow-hidden">
        <Slider {...settings}>
          {data?.map((data, index) => {
            return (
              <>
               <div className="flex " key={index}>
                <div className="w-[10%] hidden lg:block pt-4">
                  <Comma />
                </div>
                <div className="w-[90%]">
                  <p className="pt-[16px] text-[#000] font-medium text-[20px] leading-[28px] ff-overpass]">
                    {data?.description}
                  </p>
                  <div className="flex items-center  gap-x-[12px] mt-[70px]">
                    <img
                      src={data?.img}
                      className="rounded-[100%] w-[60px] h-[60px] "
                    />

                    <h3 className="text-[18px] leading-[24px] text-[#15141b66]  font-medium uppercase ">
                      {data?.title}
                    </h3>
                  </div>
                </div>
              </div></>
             
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
