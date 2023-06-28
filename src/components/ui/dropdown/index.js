"use client";
import React from "react";
import Select from "react-select";
export default function Dropdown({
  Controller,
  defaultValue,
  required,
  control,
  customWidth,
  options,
  placeholder,
  name,
  error,
  parentPage,
}) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "none" : provided.border,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      "&:hover": {
        boxShadow: "none",
      },
      backgroundColor: "transparent",
      border: error ? "2px solid #ef4444" : "2px solid #EBEAED",
      paddingLeft: "24px",
      paddingTop: parentPage ? "0px" : "10px",
      paddingBottom: parentPage ? "0px" : "10px",
      width: "100%",
      width: customWidth || "100%",
      borderRadius: "100px",
      marginBottom: "20px",
      boxShadow: "none",
      fontSize: "20px",
      fontWeight: "500",
      color: "#15143966",
      lineHeight: parentPage ? "16px" : "",
      "@media only screen and (max-width: 640px)": {
        ...provided["@media only screen and (max-width: 640px)"],
        paddingTop: parentPage ? "0px" : "4px",
        paddingBottom: parentPage ? "0px" : "4px",
      },
      "@media only screen and (max-width: 768px)": {
        ...provided["@media only screen and (max-width: 640px)"],
        paddingTop: parentPage ? "0px" : "6px",
        paddingBottom: parentPage ? "0px" : "6px",
      },
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      //   fontFamily: 'Arial',
      fontSize: "20px",
      fontWeight: "500",
      backgroundColor: state.isSelected ? "#FF5757" : provided.backgroundColor,
      "&:active": {
        backgroundColor: "#FF5757",
        color: "#fff",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      // fontFamily: 'Arial',
      fontSize: "20px",
      fontWeight: "500",
      color: "#000",
      lineHeight: "26px",
      backgroundColor: "transparent",
    }),
  };

  return (
    <>
      <Controller
        name={name ?? ""}
        defaultValue={defaultValue}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder={placeholder ?? ""}
            options={options}
            styles={customStyles}
          />
        )}
      />
    </>
  );
}
