import { commutes, socialPlatforms } from "@/components/sign-up/data";
import Dropdown from "@/components/ui/dropdown";
import { Input } from "@/components/ui/input";
import { states } from "@/utils/common";
import React from "react";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";

const MoreAboutUs = ({
  handleSubmit,
  register,
  loading,
  errors,
  control,
  parentPage,
  formData,
}) => {
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
      <div className=" mt-[21px] mb-[26.63px]">
        {parentPage === "edit-profile" && (
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                Email
              </p>
              <Input
                defaultValue={formData?.email ?? ""}
                id="email"
                name="email"
                register={register}
                required
                disabled
                error={errors?.email}
                placeholder={"Email"}
                appendClassNames={INPUT_STYLE[parentPage]}
              />
            </div>
            <div>
              <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
                Mobile Number
              </p>
              <Input
                defaultValue={formData?.mobileNumber ?? ""}
                id="mobileNumber"
                name="mobileNumber"
                register={register}
                required
                error={errors?.mobileNumber}
                placeholder={"Mobile Number"}
                appendClassNames={INPUT_STYLE[parentPage]}
              />
            </div>
          </div>
        )}
        <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
          What is your address?
        </p>

        <div className="flex flex-col md:flex-row gap-x-0 sm:gap-x-[16px]">
          <div className="md:w-2/3">
            <Input
              defaultValue={formData?.streetAddress ?? ""}
              id="streetAddress"
              name="streetAddress"
              register={register}
              required
              error={errors?.streetAddress}
              placeholder={"Street Address, e.g. 10 Main St."}
              appendClassNames={INPUT_STYLE[parentPage]}
            />
          </div>
          <div className="md:w-1/3">
            <Input
              defaultValue={formData?.apartment ?? ""}
              id="apartment"
              name="apartment"
              register={register}
              error={errors?.apartment}
              placeholder={"Apt #/Suite"}
              appendClassNames={INPUT_STYLE[parentPage]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row gap-x-0 sm:gap-x-[16px]">
          <div className="md:w-[472px]">
            <Input
              defaultValue={formData?.city ?? ""}
              id="city"
              name="city"
              register={register}
              required
              error={errors?.city}
              placeholder={"City, e.g Boston"}
              appendClassNames={INPUT_STYLE[parentPage]}
            />
          </div>

          <div className="md:w-[40%]">
            <Dropdown
              Controller={Controller}
              control={control}
              placeholder="State"
              name="state"
              required
              options={states}
              error={errors?.state}
              defaultValue={formData?.state}
              parentPage={parentPage}
            />
          </div>
        </div>
        <div
          className={`${
            parentPage === "edit-profile" ? "lg:mt-[0px]" : "lg:mt-[25px]"
          } flex flex-col lg:flex-row justify-between `}
        >
          <div className="lg:w-[398px]">
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
              What is your zipcode?
            </p>
            <Input
              defaultValue={formData?.zipCode ?? ""}
              id="zipCode"
              name="zipCode"
              register={register}
              required
              error={errors?.zipCode}
              placeholder={"Zip code"}
              appendClassNames={INPUT_STYLE[parentPage]}
            />
          </div>
          <div
            className={`mb-[20px] md:w-[340px]  ${
              parentPage === "edit-profile" ? "md:mb-[0px]" : "md:mb-[22px]"
            } `}
          >
            <p className="text-[#1E0E62] ff-dm-sans font-[500] lg:text-center text-[22px] leading-[32px] md:mb-2">
              Do you have access to a car?
            </p>
            <div className="flex flex-col lg:items-center gap-[5px]">
              <label
                htmlFor="haveCar"
                className={`inline-flex  gap-x-[5px] ${
                  errors?.haveACar ? " text-red-500" : "text-[#1E0E62] "
                } ff-dm-sans font-[500] text-[22px] leading-[32px] block`}
              >
                <input
                  defaultChecked={formData?.haveACar == "true"}
                  id="haveCar"
                  {...register("haveACar", { required: true })}
                  className={`${errors?.haveACar ? " border-red-500" : ""}`}
                  type="radio"
                  value={true}
                />
                Yes
              </label>
              <label
                htmlFor="haveNoCar"
                className={`inline-flex gap-x-[5px]  ${
                  errors?.haveACar ? " text-red-500" : "text-[#1E0E62] "
                } ff-dm-sans font-[500] text-[22px] leading-[32px] block`}
              >
                <input
                  defaultChecked={formData?.haveACar == "false"}
                  id="haveNoCar"
                  {...register("haveACar", { required: true })}
                  className={`${errors?.haveACar ? "border-red-500" : ""}`}
                  type="radio"
                  value={false}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <div
          className={`${
            parentPage === "edit-profile" ? "md:mt-[0px]" : "md:mt-[24px]"
          } flex flex-col md:flex-row gap-x-[24px]`}
        >
          <div className="md:w-1/2">
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
              What is the longest commute time you would be ok with?
            </p>
            <div className="md:w-[90%]">
              <Dropdown
                Controller={Controller}
                control={control}
                placeholder="Commute Preferences"
                name="commutePreferences"
                options={commutes}
                error={errors?.commutePreferences}
                defaultValue={formData?.commutePreferences}
                parentPage={parentPage}
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            {" "}
            <p className="text-[#1E0E62] ff-dm-sans font-[500] text-[22px] leading-[32px] mb-2">
              How did you hear about us?
            </p>
            <Dropdown
              Controller={Controller}
              control={control}
              name="aboutUs"
              required
              options={socialPlatforms}
              error={errors?.aboutUs}
              defaultValue={formData?.aboutUs}
              parentPage={parentPage}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-[7.07px]">
        <button
          className={`ff-dm-sans ${
            parentPage
              ? "px-[30px] py-[7px] w-full sm:w-auto"
              : "px-[53px] py-[18px] "
          }  disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[#f93c3c] transition duration-200 ease-in-out  bg-[#FF5757] rounded-[100px] cursor-pointer text-[20px] font-medium leading-[26px] text-center text-white`}
          type="submit"
        >
          {loading ? "Loading.." : SUBMIT[parentPage]}
        </button>
      </div>
    </form>
  );
};

export default MoreAboutUs;
