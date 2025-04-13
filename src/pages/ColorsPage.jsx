import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ColorsLayer from "../components/ColorsLayer.jsx";


const ColorsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Colors" />

        {/* ColorsLayer */}
        <ColorsLayer />


      </MasterLayout>
    </>
  );
};

export default ColorsPage;
