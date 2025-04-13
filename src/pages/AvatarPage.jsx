import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import AvatarLayer from "../components/AvatarLayer.jsx";


const AvatarPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Avatars" />

        {/* AvatarLayer */}
        <AvatarLayer />


      </MasterLayout>
    </>
  );
};

export default AvatarPage;
