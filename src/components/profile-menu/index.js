import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

export const ProfileMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSignInOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "ADD_USER", payload: {} });
        router.push("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute top-[24px] right-0 bg-[#FFF8F8] w-[200px] border-[1px] shadow-md rounded-[4px] border-[#E5E7EB]">
      <button onClick={()=> router.push('/edit-profile')} className="px-4 py-3 w-full hover:bg-[#FF5757] text-[18px] leading-[26px] cursor-pointer hover:text-white transition-all duration-150 ease-in-out font-[500] text-[#1E0E62]">
        My Profile
      </button>
      <hr />
      <button
        onClick={handleSignInOut}
        className="text-[18px] px-4 py-3 w-full hover:bg-[#FF5757] leading-[26px] cursor-pointer hover:text-white transition-all duration-150 ease-in-out  font-[500] text-[#1E0E62]"
      >
        <span>Sign Out</span>
      </button>
    </div>
  );
};
