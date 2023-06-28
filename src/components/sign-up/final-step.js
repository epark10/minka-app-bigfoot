/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "@/utils";
import storage, { auth } from "@/lib/firebase";
import { toast } from "react-hot-toast";
import Animated from "react-mount-animation";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

export const FinalStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state?.signUpFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState();
  const [file, setFile] = useState(null);
  const step = searchParams.get("step");
  const previousStep = searchParams.get("previous-step");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileUpload = (file) => {
    setFile(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleNextStep = () => {
    setLoading(false);
    dispatch({
      type: "SET_SIGNUP_FORM_DATA",
      payload: {},
    });
    router.push("/congrats");
  };

  const handlePreviousStep = () => {
    router.push(`${pathname}?step=2&previous-step=3`);
  };

  const createUserAccount = (url = null) => {
    createUserWithEmailAndPassword(auth, formData?.email, formData?.password)
      .then(async (userCredential) => {
        const u = userCredential.user;
        let userPayload = {
          userId: u?.uid,
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          email: u?.email,
          role: formData?.role,
          emailVerified: u?.emailVerified,
          isAnonymous: u?.isAnonymous,
          mobileNumber: formData?.mobileNumber,
          createdAt: new Date(),
          updatedAt: new Date(),
          candidateProfile: {
            profileImageUrl: url ?? "",
            streetAddress: formData?.streetAddress,
            apartment: formData?.apartment,
            experience: formData?.experience,
            city: formData?.city,
            state: formData?.state,
            zipCode: formData?.zipCode,
            haveACar: formData?.haveACar,
            source: "",
            commutePref: formData?.commutePreferences ?? "",
            aboutUs: formData?.aboutUs,
            desiredRoles: formData?.role,
            roleType: formData?.roleType,
            BLSCertified: formData?.BLSCertified,
            desiredWage: formData?.desiredWage,
            joiningDate: new Date(formData?.joiningDate),
            language: formData?.language,
            isCertifications: formData?.isCertifications,
            certifications: formData?.certifications,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        };
        let res = await addData("users", u?.uid, userPayload);
        if (res) {
          handleNextStep();
        } else {
          toast.error("Something went wrong...");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        toast.error(error.message);
      });
  };

  const onSubmit = (data) => {
    setLoading(true);
    try {
      if (file) {
        const storageRef = ref(
          storage,
          `/files/${file?.name ?? uuid() + "." + file?.type?.split("/")[1]}`
        );
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(percent);
          },
          (err) => console.log(err),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              dispatch({
                type: "SET_SIGNUP_FORM_DATA",
                payload: { ...formData, profileImageUrl: url },
              });
              createUserAccount(url);
            });
          }
        );
      } else {
        createUserAccount();
      }
    } catch (err) {
      toast.error("Something went wrong...");
      setLoading(false);
      console.log("error=>>", err);
    }
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
      <div className="bg-white rounded-[10px]  max-w-[1083px] w-full shadow-md px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-[44px] pb-[40px] md:pb-[60px] lg:pb-[80.96px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="ff-dm-sans font-[500] text-[22px] leading-[32px] text-[#1E0E62]">
            Step {step} of 3
          </p>
          <h1 className="ff-dm-sans text-[30px] sm:text-[42px] leading-[53px] tracking-[-0.4px] font-[700] text-[#1E0E62] sm:mt-[4px]">
            Final Step
          </h1>
          <div className="mt-[10px] sm:mt-[49px] mb-[22px] sm:mb-[40px] md:mb-[62px]">
            <p className="ff-dm-sans font-[500] text-[20px] md:text-[22px] leading-[32px] text-[#1E0E62] mb-[16px] sm:mb-[22px]">
              Upload a profile photo to share with employers
            </p>
            <div className="relative w-full">
              <input
                type="file"
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
                id="profile"
                name="profile"
                {...register("profile")}
                onChange={(e) => {
                  handleFileUpload(e.target.files[0]);
                }}
              />
              <label
                htmlFor="profile"
                className={`block w-full h-[162px] border-[2px] rounded-[30px] ${
                  errors?.profile ? "border-red-500" : "border-[#EBEAED]"
                }   cursor-pointer `}
              >
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="flex flex-col  items-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="h-[150px] px-5 md:px-0 w-full object-cover rounded-[10px] "
                      />
                    ) : (
                      <div className="mt-2 flex flex-col items-center">
                        <h2 className="max-w-[600px] ff-dm-sans font-[500] text-[18px] md:text-[20px] lg:text-[22px] lg:leading-[32px] text-[#A1A1B0] mx-auto px-4 text-center">
                          Upload your photo here, please make its a clear image
                          and that Accepts jpeg,jpg
                        </h2>
                      </div>
                    )}
                  </div>
                </div>
              </label>
            </div>
          </div>
          <p className="ff-dm-sans font-[500] text-[22px] leading-[32px] text-[#1E0E62] mt-[16px] sm:mt-[22px]">
            Recommended: Share a short clip about yourself for employers to
            learn more about you
          </p>
          <div className="max-w-[690px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[515px] mx-auto player-wrapper my-10">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-y-[17px] sm:gap-y-0 gap-x-0 sm:gap-x-[17px] justify-end mt-[7.07px]">
            <button
              type="button"
              className="ff-dm-sans px-[35px] py-[18px] bg-[#2F1893] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
            <button
              className="ff-dm-sans px-[53px] py-[18px] disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#f93c3c] bg-[#FF5757] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white"
              type="submit"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </Animated.div>
  );
};
