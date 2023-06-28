import React from "react";
import EditProfile from "@/components/edit-profile";
import YourCandidateProfile from "@/components/edit-profile/your-candidate-profile";

export default function EditProfilePage() {
  return (
    <div className="bg-[#FFF8F8] pb-10">
      <EditProfile />
      <YourCandidateProfile />
    </div>
  );
}
