import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import WizardLayer from "../components/WizardLayer.jsx";


const WizardPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Wizard" />

        {/* WizardLayer */}
        <WizardLayer />

      </MasterLayout>

    </>
  );
};

export default WizardPage; 
