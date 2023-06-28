"use client";
import React, { useEffect, useState } from "react";
import YourDreamCareer from "../common/forms/your-dream-career";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getData, updateDocument } from "@/utils";
import { toast } from "react-hot-toast";

const YourCandidateProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let res = await updateDocument("users", user?.userId, {
        "candidateProfile.role": data?.role,
        "candidateProfile.experience": data?.experience,
        "candidateProfile.roleType": data?.roleType,
        "candidateProfile.desiredWage": data?.desiredWage,
        "candidateProfile.joiningDate": data?.joiningDate,
        "candidateProfile.isCertifications": data?.isCertifications,
        "candidateProfile.BLSCertified": data?.BLSCertified,
        "candidateProfile.certifications": data?.certifications,
        "candidateProfile.language": data?.language,
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
      console.log("===>>err", err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user && !!Object.keys(user)?.length) {
      reset({
        role: user?.role,
        experience: user?.candidateProfile?.experience,
        roleType: user?.candidateProfile?.roleType,
        desiredWage: user?.candidateProfile?.desiredWage,
        joiningDate: new Date(
          user?.candidateProfile?.joiningDate?.seconds * 1000
        ),
        isCertifications: user?.candidateProfile?.isCertifications,
        BLSCertified: user?.candidateProfile?.BLSCertified,
        certifications: user?.candidateProfile?.certifications,
        language: user?.candidateProfile?.language,
      });
    }
  }, [user, reset]);
  return (
    <div className="py-4 px-4 pt-[40px] sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px]  sm:py-6 bg-white  rounded-[10px] mx-auto max-w-[1208px]">
      <h2 className="text-[34px] sm:text-[38px] md:text-[42px] leading-[40px] md:leading-[52px] font-[500] md:font-[700] text-[#1E0E62] text-center sm:text-start ">
        Your Candidate Profile
      </h2>
      <div>
        <YourDreamCareer
          parentPage="edit-profile"
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
          loading={loading}
          control={control}
          register={register}
        />
      </div>
    </div>
  );
};

export default YourCandidateProfile;
