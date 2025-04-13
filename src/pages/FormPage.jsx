import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import FormPageLayer from "../components/FormPageLayer.jsx";



const FormPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Input Form" />

        {/* FormPageLayer */}
        <FormPageLayer />

      </MasterLayout>

    </>
  );
};

export default FormPage;
