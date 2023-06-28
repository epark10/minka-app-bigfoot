import React from "react";
import Menu from "../common/icon/menu";
import MenuClose from "../common/icon/menu-close";
import Link from "next/link";

const Hamburger = ({ show, setShow, link }) => {
  return (
    <div className="">
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        <div>{show == false && <Menu height={30} width={30} />}</div>
        <div>{show == true && <MenuClose height={40} width={40} />}</div>
      </div>
      {show == true && (
        <div className="fixed top-[75px] z-50 w-full inset-0 bg-[#FFF8F8] px-4 text-center border-y-[1px] pt-[80px] py-5 flex flex-col gap-3">
          {link?.map((item, index) => (
            <Link href={`${item?.link}`} key={index}>
              <p className="uppercase text-[14px] leading-[26px] text-[#1E0E62] font-bold tracking-[2px]">
                {item?.title}
              </p>
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3 items-center justify-center">
            <Link
              href={"/sign-in"}
              className="text-[14px] text-center flex justify-center items-center leading-[26px]  font-[500] text-[#1E0E62]"
            >
              <span>Sign In</span>
            </Link>
            <Link
              href="/sign-up"
              className="w-[160px] text-center py-[6px]  rounded-full bg-[#FF5757] text-white tracking-[-0.225px] text-[14px] leading-[26px]  font-[500]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
