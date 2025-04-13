import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TooltipLayer from "../components/TooltipLayer.jsx";

const TooltipPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Tooltip" />

        {/* TooltipLayer */}
        <TooltipLayer />

      </MasterLayout>

    </>
  );
};

export default TooltipPage; 
