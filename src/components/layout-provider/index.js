/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "../footer";
import { Toaster } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import {Navbar} from "../header" 

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let signPages = pathname.includes("sign");
  let congratsPage = pathname == "/congrats";

  useEffect(() => {
    dispatch({
      type: "SET_SIGNUP_FORM_DATA",
      payload: {},
    });
    setLoading(false);
  }, []);

  if (loading)
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
    <>
      {!signPages && !congratsPage && <Navbar />}
      <main>{children}</main>
      {!signPages && !congratsPage && <Footer />}
      <Toaster position="top-right" />
    </>
  );
};

export default LayoutProvider;
