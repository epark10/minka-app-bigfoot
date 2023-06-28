/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Hamburger from "../hamburger";
import { Oval } from "react-loader-spinner";
import ChevronDown from "../common/icon/chevron-down";
import ChevronUp from "../common/icon/chevron-up";
import { ProfileMenu } from "../profile-menu";
import { useRouter } from "next/navigation";
import Image from "next/image";

const link = [
  { title: "Employers", link: "/" },
  { title: "Candidates", link: "/candidates" },
  { title: "Programs", link: "/" },
];

export const Navbar = () => {
  const user = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Oval
          height={50}
          width={50}
          color="#FF5757"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#003952"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  return (
    <div className="bg-[#FFF8F8]">
      <div className="max-w-[1320px] mx-auto px-4 ">
        <div className="flex items-center justify-between py-[15px] sm:py-[20px] md:py-[25px] lg:py-[31px]">
          <div className="w-full lg:w-[40%] flex items-center justify-between">
            <div className="hidden lg:flex gap-x-5 ">
              {link?.map((item, index) => (
                <Link
                  href={`${item?.link}`}
                  key={index}
                  className="uppercase text-[14px] border-b-2 border-[#FFF8F8] hover:border-[#FF5757] transition-all duration-150 ease-in-out leading-[26px] text-[#1E0E62] font-bold tracking-[2px]"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
            <button className="flex lg:hidden items-center">
              <img src="/images/logo.png" alt="Minka logo" />
              <h2 className="text-[24px] sm:text-[30px] sm:leading-[36px] text-[#1E0E62] font-medium tracking-[2px]">
                Minka
              </h2>
            </button>
            <div className="lg:hidden">
              <Hamburger link={link} show={show} setShow={setShow} />
            </div>
          </div>
          <div className="lg:w-[60%] flex  lg:justify-between items-center">
            <button
              onClick={() => router.push("/")}
              className="hidden lg:flex items-center"
            >
              <img src="/images/logo.png" alt="Minka logo" />
              <h2 className="text-[24px] sm:text-[30px] sm:leading-[36px] text-[#1E0E62] font-medium tracking-[2px]">
                Minka
              </h2>
            </button>
            {!user || !Object.keys(user)?.length ? (
              <div className="hidden lg:flex gap-x-[39px]">
                <Link
                  href={"/sign-in"}
                  className=" text-center flex justify-center items-center "
                >
                  <span className="border-b-[2px] py-[3px] text-[18px] border-[#FFF8F8] transition-all duration-150 ease-in-out hover:border-[#FF5757]  leading-[26px]  font-[500] text-[#1E0E62]">
                    Sign In
                  </span>
                </Link>
                <Link
                  href="/sign-up"
                  className="w-[200px] text-center py-[10px]  rounded-full hover:bg-[#fd4242] transition-all duration-150 ease-in-out bg-[#FF5757] text-white tracking-[-0.225px] text-[18px] leading-[26px]  font-[500]"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex gap-x-6 items-center">
                <div className="flex items-center gap-x-[14px]">
                  {user?.candidateProfile?.profileImageUrl ? (
                    <Image
                      width={40}
                      height={40}
                      src={user?.candidateProfile?.profileImageUrl}
                      className="h-[40px] w-[40px] rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-[46px] h-[46px] rounded-full bg-[#FF5757] flex justify-center items-center">
                      <p className=" text-white tracking-[-0.225px] text-[18px] leading-[26px]  font-[500] uppercase ">
                        {user?.firstName?.slice(0, 1)}
                        {user?.lastName?.slice(0, 1)}
                      </p>
                    </div>
                  )}
                  <div>
                    <div
                      className="cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      {open === false ? <ChevronDown /> : <ChevronUp />}
                    </div>
                    <div className="relative w-full">
                      {open && <ProfileMenu />}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
