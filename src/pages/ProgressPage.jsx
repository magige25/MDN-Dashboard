import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ProgressLayer from "../components/ProgressLayer.jsx";

const ProgressPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Progress Bar" />

        {/* ProgressLayer */}
        <ProgressLayer />

      </MasterLayout>

    </>
  );
};

export default ProgressPage; 
