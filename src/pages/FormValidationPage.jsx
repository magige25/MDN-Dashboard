import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import FormValidationLayer from "../components/FormValidationLayer.jsx";


const FormValidationPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Form Validation" />

        {/* FormValidationLayer */}
        <FormValidationLayer />

      </MasterLayout>

    </>
  );
};

export default FormValidationPage;
