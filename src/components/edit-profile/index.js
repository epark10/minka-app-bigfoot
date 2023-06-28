"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MoreAboutUs from "../common/forms/more-about-us";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateDocument } from "@/utils";
import { toast } from "react-hot-toast";

const EditProfile = () => {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  console.log("=>>user", user);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let res = await updateDocument("users", user?.userId, {
        mobileNumber: data?.mobileNumber,
        "candidateProfile.streetAddress": data?.streetAddress,
        "candidateProfile.apartment": data?.apartment,
        "candidateProfile.city": data?.city,
        "candidateProfile.state": data?.state,
        "candidateProfile.zipCode": data?.zipCode,
        "candidateProfile.haveACar": data?.haveACar,
        "candidateProfile.commutePref": data?.commutePreferences,
        "candidateProfile.aboutUs": data?.aboutUs,
      });
      if (res) {
        let updatedData = await getData("users", user?.userId);
        if (updatedData) {
          dispatch({ type: "ADD_USER", payload: updatedData });
          toast.success("Profile updated successfully!");
        } else {
          toast.error("Failed to update profile!");
        }
      } else {
        toast.error("Failed to update profile!");
      }
    } catch (err) {
      console.log("=>>err", err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && !!Object.keys(user)?.length) {
      reset({
        email: user?.email,
        mobileNumber: user?.mobileNumber,
        streetAddress: user?.candidateProfile?.streetAddress,
        apartment: user?.candidateProfile?.apartment,
        city: user?.candidateProfile?.city,
        state: user?.candidateProfile?.state,
        zipCode: user?.candidateProfile?.zipCode,
        haveACar: user?.candidateProfile?.haveACar,
        commutePreferences: user?.candidateProfile?.commutePref,
        aboutUs: user?.candidateProfile?.aboutUs,
      });
    }
  }, [user, reset]);

  return (
    <div className="bg-[#FFF8F8]  px-4 pt-[44px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pb-[40px]">
      <div className=" rounded-[10px] mx-auto max-w-[1208px] items-start xl:items-stretch w-full lg:flex justify-between gap-[30px] xl:gap-x-[40px]">
        <div className="lg:w-[36%] rounded-[10px] p-4 sm:p-6 lg:p-10 bg-white shadow-md">
          <div className="max-w-[304px] mx-auto">
            <Image
              src={user?.candidateProfile?.profileImageUrl??'/images/dummy.jpeg'}
              className="rounded-full"
              width={304}
              height={304}
              alt=""
            />
          </div>
          <h3 className="text-[#1E0E62] text-[18px] leading-[28px] font-[500] text-center pt-[30px]">
            {user?.firstName + " " + user?.lastName}
          </h3>
        </div>
        <div className="lg:w-[64%] p-4 sm:p-6 bg-white shadow-md rounded-[10px]">
          <div className="flex justify-center sm:justify-start">
            <h2 className="text-[34px] sm:text-[38px] md:text-[42px] leading-[30px] font-[500] text-[#1E0E62] border-b-[3px]  border-[#1E0E62] inline-flex pb-1">
              Your Account
            </h2>
          </div>
          <MoreAboutUs
            parentPage="edit-profile"
            loading={loading}
            register={register}
            handleSubmit={handleSubmit(onSubmit)}
            control={control}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
