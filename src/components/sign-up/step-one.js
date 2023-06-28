import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Animated from "react-mount-animation";
import MoreAboutUs from "../common/forms/more-about-us";

export const StepOne = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const step = searchParams.get("step");
  const previousStep = searchParams.get("previous-step");

  const formData = useSelector((state) => state?.signUpFormData);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    dispatch({
      type: "SET_SIGNUP_FORM_DATA",
      payload: { ...formData, ...data },
    });
    setTimeout(() => {
      setLoading(false);
      router.push(`${pathname}?step=2&previous-step=1`);
    }, 1000);
  };

  return (
    <Animated.div
      className="relative"
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
      <div className="bg-white rounded-[10px] w-full max-w-[1083px] mx-auto px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-[44px] pb-[40px] md:pb-[60px] lg:pb-[80.96px] shadow-md">
        <p className="ff-dm-sans font-[500] text-[22px] leading-[32px]   text-[#1E1E62]">
          Step {step} of 3
        </p>
        <h1 className="ff-dm-sans text-[30px] sm:text-[42px] sm:leading-[56px] tracking-[-0.4px] font-[700] text-[#1E1E62] pt-1">
          Lets Learn a Bit More About You
        </h1>
        <MoreAboutUs
          loading={loading}
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          control={control}
          errors={errors}
          formData={formData}
        />
      </div>
    </Animated.div>
  );
};
