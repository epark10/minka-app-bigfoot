import React, { useCallback, useState } from "react";
import Dropdown from "../ui/dropdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../ui/date-picker";
import { Input } from "../ui/input";

export const StepThree = () => {
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
  const [loading, setLoading] = useState(false);

  const customWidth = "130%";
  const step = searchParams.get("step");
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleNextStep = () => {
    router.push(pathname + "?" + createQueryString("step", "3"));
  };
  const handlePreviousStep = () => {
    router.push(pathname + "?" + createQueryString("step", "1"));
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
  const roles = [
    { value: "medicalreceptionist ", label: "Medical Receptionist" },
    { value: "medicalassistant ", label: "Medical Assistant" },
    { value: "phlebotomist ", label: "Phlebotomist" },
    { value: "medicalscribe ", label: "Medical Scribe" },
    { value: "surgicaltech ", label: "Surgical Tech" },
    { value: "dentalassistant ", label: "Dental Assistant" },
    { value: "physicaltherapist ", label: "Physical Therapist" },
    { value: "mohsassistant ", label: "Mohs Assistant" },
    { value: "histologytechnician ", label: "Histology Technician" },
    { value: "pharmacytechnician ", label: "Pharmacy Technician" },
    { value: "candidate ", label: "Candidate" },
  ];

  const languages = [
    { value: "english ", label: "English" },
    { value: "spanish ", label: "Spanish" },
    { value: "chinese ", label: "Chinese" },
    { value: "hindi ", label: "Hindi" },
    { value: "arabic ", label: "Arabic" },
    { value: "portuguese ", label: "Portuguese" },
    { value: "bengali ", label: "Bengali" },
    { value: "russian ", label: "Russian" },
    { value: "japanese ", label: "Japanese" },
    { value: "punjabi ", label: "Punjabi" },
    { value: "german ", label: "German" },
    { value: "javanese ", label: "Javanese" },
    { value: "swahili ", label: "Swahili" },
    { value: "french ", label: "French" },
    { value: "italian ", label: "Italian" },
    { value: "turkish ", label: "Turkish" },
    { value: "korean ", label: "Korean" },
    { value: "vietnamese ", label: "Vietnamese" },
    { value: "tamil ", label: "Tamil" },
    { value: "urdu ", label: "Urdu" },
    { value: "persian ", label: "Persian" },
    { value: "thai ", label: "Thai" },
    { value: "gujarati ", label: "Gujarati" },
    { value: "dutch ", label: "Dutch" },
    { value: "yiddish ", label: "Yiddish" },
    { value: "greek ", label: "Greek" },
    { value: "telugu ", label: "Telugu" },
    { value: "malayalam ", label: "Malayalam" },
    { value: "danish ", label: "Danish" },
    { value: "finnish ", label: "Finnish" },
    { value: "norwegian ", label: "Norwegian" },
    { value: "swedish ", label: "Swedish" },
    { value: "polish ", label: "Polish" },
    { value: "hungarian ", label: "Hungarian" },
    { value: "romanian ", label: "Romanian" },
    { value: "czech ", label: "Czech" },
    { value: "hebrew ", label: "Hebrew" },
    { value: "ukrainian ", label: "Ukrainian" },
    { value: "indonesian ", label: "Indonesian" },
    { value: "malay ", label: "Malay" },
    { value: "tagalog ", label: "Tagalog (Filipino)" },
    { value: "serbian ", label: "Serbian" },
    { value: "croatian ", label: "Croatian" },
    { value: "slovak ", label: "Slovak" },
    { value: "bulgarian ", label: "Bulgarian" },
  ];

  const experience = [
    { value: "1-3", label: "1-3" },
    { value: "3-5", label: "3-5" },
    { value: "5-9", label: "5-9" },
    { value: "10+", label: "10+" },
    { value: "underoneyear", label: "Under One Year" },
  ];
  const jobtype = [
    { value: "fullTime", label: "Full Time" },
    { value: "partTime", label: "Part Time" },
    { value: "perDiem", label: "Per Diem" },
    { value: "C", label: "Travel" },
    { value: "internship", label: "Internship" },
  ];
  const hours = [
    { value: "10", label: "$10" },
    { value: "20", label: "$20" },
    { value: "30", label: "$30" },
    { value: "40", label: "$40" },
    { value: "50", label: "$50" },
    { value: "60", label: "$60" },
  ];
  return (
    <div className="bg-white rounded-[10px]  max-w-[1083px] w-full shadow-md px-4 sm:px-[20px] md:px-[30px] lg:px-[60px] xl:px-[80px] 2xl:px-[100px] pt-[44px] pb-[40px] md:pb-[60px] lg:pb-[80.96px]">
      <p className="ff-dm-sans font-[500] text-[22px] leading-[32px] text-[#1E0E62]">
        Step {step} of 3
      </p>
      <h1 className="ff-dm-sans text-[30px] leading-[36px] sm:text-[36px] lg:text-[42px] sm:leading-[42px] lg:leading-[53px] tracking-[-0.4px] font-[700] text-[#1E0E62] pt-1">
        Tell Us Your Dream Career
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[22px] lg:mt-[49px] mb-[53px] lg:mb-[158px]">
          <div className="w-full">
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
              What roles are you looking for?
            </p>
            <Dropdown
              Controller={Controller}
              control={control}
              placeholder="Medical Assistant"
              name="role"
              required
              error={errors?.role}
              defaultValue={formData?.role}
              options={roles}
              parentPage={parentPage}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-x-[12px]">
            <div className="md:w-[54%]">
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                How many years of experience do you have?{" "}
              </p>
              <Dropdown
                Controller={Controller}
                control={control}
                placeholder="1 - 3 Years"
                name="experience"
                required
                error={errors?.experience}
                defaultValue={formData?.experience}
                options={experience}
                parentPage={parentPage}
              />
            </div>
            <div className="md:w-[46%]">
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                Tell us what you’re looking for
              </p>
              <Dropdown
                Controller={Controller}
                control={control}
                placeholder="Full-time"
                name="roleType"
                required
                error={errors?.roleType}
                defaultValue={formData?.roleType}
                options={jobtype}
                parentPage={parentPage}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full  gap-x-[12px] md:items-end">
            <div className="md:w-[54%]">
              <p className="text-[#1E0E62]  ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                What is your desired hourly wage?
              </p>
              <Dropdown
                Controller={Controller}
                control={control}
                placeholder="$20 - $30"
                name="desiredWage"
                required
                error={errors?.desiredWage}
                defaultValue={formData?.desiredWage}
                options={hours}
                custom={customWidth}
                parentPage={parentPage}
              />
            </div>
            <div className="md:w-[46%]">
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                What date you get started?
              </p>
              <div className=" flex flex-col">
                <DatePicker
                  Controller={Controller}
                  control={control}
                  placeholder="$20 - $30"
                  required
                  name="joiningDate"
                  error={errors?.joiningDate}
                  minDate={new Date()}
                  placeholderText="YY /MM /DD"
                  defaultValue={
                    formData?.joiningDate
                      ? new Date(formData?.joiningDate)
                      : new Date()
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:mb-2 md:py-4">
            <div className="mb-[12px] md:mb-0">
              <p className="text-[#1E0E62] ff-dm-sans font-[500]  text-[22px] leading-[32px] mb-2">
                Do you have any other certifications to share?
              </p>
              <div className="flex gap-x-[20px]">
                <label
                  htmlFor="isCertificationsYes"
                  className={`flex gap-[5px] ${
                    errors?.isCertifications
                      ? " text-red-500"
                      : "text-[#1E0E62] "
                  } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
                >
                  <input
                    id="isCertificationsYes"
                    checked={formData?.isCertifications}
                    {...register("isCertifications", { required: true })}
                    className={` ${
                      errors?.isCertifications ? "border-red-500" : ""
                    }`}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label
                  htmlFor="isCertificationsNo"
                  className={`flex gap-[5px] ${
                    errors?.isCertifications
                      ? " text-red-500"
                      : "text-[#1E0E62] "
                  } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
                >
                  <input
                    checked={formData?.isCertifications}
                    id="isCertificationsNo"
                    {...register("isCertifications", { required: true })}
                    className={`${
                      errors?.isCertifications ? "border-red-500" : ""
                    }`}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="mb-[12px] md:mb-0">
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                Are you BLS certified?
              </p>
              <div className="flex gap-x-[20px]">
                <label
                  htmlFor="BLSCertifiedYes"
                  className={`flex gap-[5px] ${
                    errors?.BLSCertified ? " text-red-500" : "text-[#1E0E62] "
                  } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
                >
                  <input
                    checked={formData?.BLSCertified}
                    id="BLSCertifiedYes"
                    {...register("BLSCertified", { required: true })}
                    className={`${
                      errors?.BLSCertified ? "border-red-500" : ""
                    }`}
                    type="radio"
                    value={true}
                  />
                  Yes
                </label>
                <label
                  htmlFor="BLSCertifiedNo"
                  className={`flex gap-[5px] ${
                    errors?.BLSCertified ? " text-red-500" : "text-[#1E0E62] "
                  } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
                >
                  <input
                    checked={formData?.BLSCertified}
                    id="BLSCertifiedNo"
                    {...register("BLSCertified", { required: true })}
                    className={`${
                      errors?.BLSCertified ? "border-red-500" : ""
                    }`}
                    type="radio"
                    value={false}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] md:pt-4 mb-2">
              Do you have any certifications to share?
            </p>
            <Input
              defaultValue={formData?.certifications ?? ""}
              id="certifications"
              placeholder="BLS, CMA"
              name="certifications"
              register={register}
              required
              error={errors?.certifications}
            />
          </div>
          <div className="">
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
              Do you speak any additional languages?
            </p>
            <div className="sm:w-[288px]">
              <Dropdown
                Controller={Controller}
                control={control}
                placeholder="Language"
                name="language"
                error={errors?.language}
                defaultValue={formData?.language}
                options={languages}
                parentPage={parentPage}
              />
            </div>
          </div>
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
            className="ff-dm-sans  disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#f93c3c] px-[53px] py-[18px] bg-[#FF5757] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white"
            type="submit"
          >
            {loading ? "Loading..." : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};
