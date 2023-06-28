"use client";
import React from "react";

export const Input = ({
  type,
  id,
  placeholder,
  name,
  appendClassNames,
  register,
  required,
  pattern,
  error,
  defaultValue,
  disabled
}) => {
  return (
    <div className="relative">
      <input
        {...register(name, {
          required,
          ...(pattern && { pattern: pattern }),
        })}
        className={`${appendClassNames ?? ""} ${
          error ? "border-red-500 text-red-500" : "border-[#EBEAED]"
        } w-full pl-6 pr-[10px] border-2 rounded-[100px] font-[500]   text-[18px] md:text-[20px]  leading-[26px] placeholder:text-[#15143966] placeholder:text-opacity-40 focus:outline-none `}
        type={type ?? "text"}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
      />
    {error?.type==='custom'&&<p className="text-red-500 text-xs absolute left-[25px] bottom-[3px]">{error.message}</p>}
    </div>
  );
};
