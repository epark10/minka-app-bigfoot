import React, { useState } from "react";
import Dropdown from "../ui/dropdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../ui/date-picker";
import { Input } from "../ui/input";
import Animated from "react-mount-animation";
import { languages } from "./data";
import YourDreamCareer from "../common/forms/your-dream-career";

export const StepTwo = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const formData = useSelector((state) => state?.signUpFormData);
  const step = searchParams.get("step");
  const previousStep = searchParams.get("previous-step");
  const [loading, setLoading] = useState(false);

  const handleNextStep = () => {
    router.push(`${pathname}?step=3&previous-step=2`);
  };
  const handlePreviousStep = () => {
    router.push(`${pathname}?step=1&previous-step=2`);
  };

  const onSubmit = (data) => {
    setLoading(true);
    dispatch({
      type: "SET_SIGNUP_FORM_DATA",
      payload: { ...formData, ...data },
    });
    setTimeout(() => {
      reset();
      setLoading(false);
      handleNextStep();
    }, 1000);
  };

  return (
    <Animated.div
      className="relative "
      show={true}
      mountAnim={
        previousStep < step
          ? `
            0% {right: -100%}
            100% {right : 0}`
          : ` 0% {left: -100%}
            100% {left : 0}`
      }
    >
      <div className="bg-white rounded-[10px]  max-w-[1083px] w-full shadow-md px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-[44px] pb-[40px] md:pb-[60px] lg:pb-[80.96px]">
        <p className="ff-dm-sans font-[500] text-[22px] leading-[32px] text-[#1E0E62]">
          Step {step} of 3
        </p>
        <h1 className="ff-dm-sans text-[30px] leading-[36px] sm:text-[36px] lg:text-[42px] sm:leading-[42px] lg:leading-[53px] tracking-[-0.4px] font-[700] text-[#1E0E62] pt-1">
          Tell Us Your Dream Career
        </h1>
        <YourDreamCareer
          handlePreviousStep={handlePreviousStep}
          formData={formData}
          handleSubmit={handleSubmit(onSubmit)}
          register={register}
          control={control}
          loading={loading}
          errors={errors}
        />
      </div>
    </Animated.div>
  );
};
