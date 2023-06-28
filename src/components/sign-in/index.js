"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, ERROR_BY_CODE } from "@/utils/common";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "react-hot-toast";
import { getData } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";
export const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const { uid } = userCredential.user;
        let res = await getData("users", uid);
        if (res) {
          dispatch({ type: "ADD_USER", payload: res });
          setTimeout(() => {
            router.push("/");
          }, 800);
        }
      })
      .catch((error) => {
        console.log("error.code--------",error.code)
        toast.error(ERROR_BY_CODE[error.code]);
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (user && !!Object.keys(user)?.length) {
      router.push("/");
    } else {
      setWaiting(false);
    }
  }, [router, user]);

  if (waiting)
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
    <div className="bg-[#ff57570a] bg-opacity-40 min-h-screen flex justify-center items-center p-5">
      <div className="inline-flex flex-col space-y- items-center  bg-white rounded-[10px] px-[50px] md:px-[100px] pt-[60px] pb-[21.6px] max-w-[570px] shadow-md">
        <h1 className="font-[700] text-[42px] leading-[56px] text-center tracking-[-0.4px] text-[#1E0E62]">
          Sign In
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[50px] ">
            <Input
              type="text"
              id="email"
              placeholder="Your email"
              name="email"
              register={register}
              required
              pattern={EMAIL_REGEX}
              error={errors?.email}
              appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
            />
            <Input
              type="password"
              id="password"
              placeholder="Your password"
              name="password"
              register={register}
              required
              error={errors?.password}
              appendClassNames="py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]"
            />
          </div>
          <Link href={"#"}>
            <p className="text-[16px] font-[400] leading-[24px] text-[#A1A1B0] text-center ">
              Forgot Password?
            </p>
          </Link>
          <div className="w-full flex justify-center">
            <button
              className="px-[84px] disabled:cursor-not-allowed disabled:opacity-50 py-[17px] bg-[#FF5757] hover:bg-[#f93c3c] transition duration-150 ease-in-out rounded-[100px] cursor-pointer mt-[29.6px] mb-[60.5px] text-[20px] font-medium leading-[26px] text-center text-white"
              type="submit"
              disabled={!isValid}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
          <div className="border-t-[1px] border-t-[#EBEAED] gap-x-[10px] pt-[21.9px] px-[6px] md:px-[64px]">
            <span className=" text-base leading-relaxed text-[#A1A1B0] ">
              Don’t have an account?{" "}
            </span>
            <Link href={"/sign-up"}>
              <button className="text-base leading-relaxed pl-2 text-[#483AE7]">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
