"use client";
import React from "react";
import ReactDatePicker from "react-datepicker";
export const DatePicker = ({
  Controller,
  defaultValue,
  required,
  control,
  name,
  error,
  minDate,
  placeholderText,
  appendClassNames
}) => {
  return (
    <>
      <Controller
        name={name ?? ""}
        control={control}
        rules={{ required }}
        dateFormat="MM-DD-YYYY"
        defaultValue={defaultValue}
        render={({ field }) => (
          <ReactDatePicker
            {...field}
            className={`${
              error ? "border-red-500" : "border-[#EBEAED]"
            } ${appendClassNames ?? ""} w-full pl-[22px]  border-2 rounded-[100px] text-[20px] font-medium leading-[26px] placeholder:text-[#15143966] placeholder:text-opacity-60 placeholder:text-[#333333] active:placeholder:text-[#15143966] active:placeholder:text-opacity-40 focus:outline-none  `}
            minDate={minDate}
            
            placeholderText={placeholderText}
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
    </>
  );
};
