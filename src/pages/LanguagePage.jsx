import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import LanguageLayer from "../components/LanguageLayer";




const LanguagePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Languages" />

        {/* LanguageLayer */}
        <LanguageLayer />

      </MasterLayout>

    </>
  );
};

export default LanguagePage; 
