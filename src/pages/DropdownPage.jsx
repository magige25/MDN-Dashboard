import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import DropdownLayer from "../components/DropdownLayer.jsx";

const DropdownPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Dropdown" />

        {/* DropdownLayer */}
        <DropdownLayer />


      </MasterLayout>
    </>
  );
};

export default DropdownPage;
