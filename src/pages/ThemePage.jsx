import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ThemeLayer from "../components/ThemeLayer";

const ThemePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Theme" />

        {/* ThemeLayer */}
        <ThemeLayer />

      </MasterLayout>

    </>
  );
};

export default ThemePage; 
