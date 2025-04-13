import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import SwitchLayer from "../components/SwitchLayer.jsx";

const SwitchPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Switch" />

        {/* SwitchLayer */}
        <SwitchLayer />

      </MasterLayout>

    </>
  );
};

export default SwitchPage; 
