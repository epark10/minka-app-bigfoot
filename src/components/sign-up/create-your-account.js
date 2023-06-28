"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "../ui/input";
import { EMAIL_REGEX, PHONE_REGEX } from "@/utils/common";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const CreateYourAccount = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state?.signUpFormData);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleNextStep = () => {
    router.push(`${pathname}?step=1`);
  };
  const onSubmit = async (data) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let emails = [];
    querySnapshot.forEach((doc) => {
      emails.push(doc.data().email);
    });
    if (emails.includes(data.email)) {
      setError("email", { type: "custom", message: "Email already exists!" })
      return;
    }
    
    setLoading(true);
    dispatch({
      type: "SET_SIGNUP_FORM_DATA",
      payload: { ...formData, ...data },
    });

    setTimeout(() => {
      setLoading(false);
      handleNextStep();
    }, 1000);
  };

  return (
    <div className="bg-white rounded-[10px] max-w-[1083px] shadow-md">
      <div className="px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-[44px] pb-[40px] md:pb-[60px] lg:pb-[80.96px]">
        <h1 className="ff-dm-sans ff-dm-sans text-[30px] sm:text-[42px] leading-[53px] tracking-[-0.4px] font-[700] text-[#1E0E62] pt-1">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mt-[25px] mb-[26.63px]">
            <div className="flex flex-col sm:flex-row gap-x-[17px]">
              <Input
                defaultValue={formData?.firstName ?? ""}
                id="firstName"
                placeholder="First Name"
                name="firstName"
                register={register}
                required
                error={errors?.firstName}
                appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
              />
              <Input
                defaultValue={formData?.lastName ?? ""}
                id="lastName"
                placeholder="Last Name"
                name="lastName"
                register={register}
                required
                error={errors?.lastName}
                appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
              />
            </div>
            <Input
              defaultValue={formData?.email ?? ""}
              id="email"
              placeholder="Email"
              name="email"
              register={register}
              required
              pattern={EMAIL_REGEX}
              error={errors?.email}
              appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
            />
            <Input
              defaultValue={formData?.password ?? ""}
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              register={register}
              required
              error={errors?.password}
              appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
            />
            <Input
              defaultValue={formData?.mobileNumber ?? ""}
              id="mobileNumber"
              placeholder="Mobile Phone Number"
              name="mobileNumber"
              register={register}
              required
              pattern={PHONE_REGEX}
              error={errors?.mobileNumber}
              appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
            />
          </div>
          <p className="text-[16px] font-[400] leading-[26px] text-[#A1A1B0] text-center pb-1">
            By signing up, you agree to the Terms of Service.
          </p>
          <div className="w-full flex justify-center mt-[7.07px] mb-[28.68px]">
            <button
              className="ff-dm-sans shadow-sm disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#f93c3c] transition duration-200 ease-in-out  px-[90px] sm:px-[199px] py-[18px] bg-[#FF5757] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white"
              type="submit"
            >
              {loading ? "Loading..." : "Join Minka!"}
            </button>
          </div>
          <div className="border-t-[1px] border-t-[#EBEAED] gap-x-[10px] pt-[21.9px] px-[6px] md:px-[64px] text-center">
            <span className="ff-dm-sans text-base leading-relaxed text-[#A1A1B0] ">
              Already have an account{" "}
            </span>
            <Link href="/sign-in">
              <button className="ff-dm-sans text-base leading-relaxed pl-2 text-[#483AE7]">
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
