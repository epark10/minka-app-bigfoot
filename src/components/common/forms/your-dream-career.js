import {
  experiences,
  hours,
  jobTypes,
  languages,
  roles,
} from "@/components/sign-up/data";
import { DatePicker } from "@/components/ui/date-picker";
import Dropdown from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import React from "react";

const YourDreamCareer = ({
  handleSubmit,
  register,
  loading,
  errors,
  control,
  formData,
  handlePreviousStep,
  parentPage,
}) => {
  const customWidth = "130%";
  const INPUT_STYLE = {
    "edit-profile": "py-[5px] mb-[8px]",
    undefined: "py-[12px] sm:py-[14px] md:py-[18px] mb-[20px]",
  };
  const SUBMIT = {
    "edit-profile": "Save",
    undefined: "Next",
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`mt-[22px] lg:mt-[49px] ${
          parentPage === "edit-profile" ? "mb-3" : " mb-[53px] lg:mb-[140px]"
        }`}
      >
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
              options={experiences}
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
              options={jobTypes}
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
            <div className=" flex flex-col ">
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
                  formData?.joiningDate && new Date(formData?.joiningDate)
                }
                appendClassNames={INPUT_STYLE[parentPage]}
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
                  errors?.isCertifications ? " text-red-500" : "text-[#1E0E62] "
                } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
              >
                <input
                  id="isCertificationsYes"
                  defaultChecked={formData?.isCertifications == "true"}
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
                  errors?.isCertifications ? " text-red-500" : "text-[#1E0E62] "
                } ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2 block`}
              >
                <input
                  defaultChecked={formData?.isCertifications == "false"}
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
                  defaultChecked={formData?.BLSCertified == "true"}
                  id="BLSCertifiedYes"
                  {...register("BLSCertified", { required: true })}
                  className={`${errors?.BLSCertified ? "border-red-500" : ""}`}
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
                  defaultChecked={formData?.BLSCertified == "false"}
                  id="BLSCertifiedNo"
                  {...register("BLSCertified", { required: true })}
                  className={`${errors?.BLSCertified ? "border-red-500" : ""}`}
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
            appendClassNames={INPUT_STYLE[parentPage]}
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
        {!parentPage && (
          <button
            type="button"
            className="ff-dm-sans px-[35px] py-[18px] bg-[#2F1893] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white"
            onClick={handlePreviousStep}
          >
            Previous
          </button>
        )}
        <button
          className={`ff-dm-sans ${
            parentPage ? "px-[53px] py-[7px]" : "px-[53px] py-[18px]"
          }  disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#f93c3c]   bg-[#FF5757] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white`}
          type="submit"
        >
          {loading ? "Loading..." : SUBMIT[parentPage]}
        </button>
      </div>
    </form>
  );
};

export default YourDreamCareer;
