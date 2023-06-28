"use client";
import React from "react";
import { CreateYourAccount } from "./create-your-account";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { FinalStep } from "./final-step";
import { useSearchParams } from "next/navigation";

const SignUp = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const STEPS = {
    null: <CreateYourAccount />,
    1: <StepOne />,
    2: <StepTwo />,
    3: <FinalStep />,
  };

  return (
    <>
      <div className="bg-[#ff57570a] bg-opacity-40 min-h-screen flex justify-center items-center p-5 pt-[48px] pb-[61px]">
        <div>{STEPS[step]}</div>
      </div>
    </>
  );
};

export default SignUp;
