import React from "react";
import { Bullseys } from "../icons/bullseys";
import { Diamond } from "../icons/diamond";
import { Crop } from "../icons/crop";
import Link from "next/link";
import { Dribble } from "../icons/dribble";
import { BehanceSquare } from "../icons/behance-square";

const data = [
  {
    svg: <Bullseys />,
    title: "Full Control",
    description:
      "Easily change and tweak your content when you need to, however you want. No more third party vendor lock-in.",
  },
  {
    svg: <Crop />,
    title: "For Freelancers and Agencies",
    description:
      "Pay once and it’s yours forever. Use it to build as many sites as you need; long form, presen-tations, splash sites, and more.",
  },
  {
    svg: <Diamond />,
    title: "Cmd + C / Cmd + V",
    description:
      "Edit content in a comfortable manner. It’s as simple as copy and paste.",
  },
];
const link = [
  { title: "HOME ", link: "/" },
  { title: "Employer", link: "/" },
  { title: "candidates", link: "/candidates" },
  { title: "programer", link: "/" },
];
export const Footer = () => {
  return (
    <div className="max-w-[1171px] mx-auto px-4 border-t-2 pt-[65px] text-center sm:text-start">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[40px]">
        {data?.map((item, index) => (
          <div key={index}>
            <div className="mb-[12px] mt-[20px] md:mt-0 md:mb-[33px] flex justify-center sm:justify-start">{item?.svg}</div>
            <h3 className="mb-[23px] text-[#1E0E62] text-[22px] leading-[32px] font-[500]">
              {item?.title}
            </h3>
            <p className="text-[#15143966]">{item?.description}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 items-center">
        <div className="sm:flex gap-x-5 my-[60px]">
          {link?.map((item, index) => (
            <Link href={`${item?.link}`} key={index}>
              <p className="uppercase text-[14px] leading-[26px] text-[#1E0E62] font-bold tracking-[2px]">
                {item?.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src="/images/logo.png" alt="Minka logo" />
          </div>
          <div className="flex gap-x-[39px]">
            <button>
              <Dribble />
            </button>
            <button>
              <BehanceSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
