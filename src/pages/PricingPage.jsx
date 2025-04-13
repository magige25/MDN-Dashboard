import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import PricingLayer from "../components/PricingLayer.jsx";

const PricingPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Pricing" />

        {/* PricingLayer */}
        <PricingLayer />

      </MasterLayout>

    </>
  );
};

export default PricingPage; 
