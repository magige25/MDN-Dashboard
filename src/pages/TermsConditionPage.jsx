import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TermsConditionLayer from "../components/TermsConditionLayer.jsx";

const TermsConditionPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Terms & Conditions" />

        {/* TermsConditionLayer */}
        <TermsConditionLayer />

      </MasterLayout>

    </>
  );
};

export default TermsConditionPage; 
