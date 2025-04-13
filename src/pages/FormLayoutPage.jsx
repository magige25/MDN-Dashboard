import React from "react";
import FormLayoutLayer from "../components/FormLayoutLayer.jsx";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";


const FormLayoutPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Input Layout" />

        {/* FormLayoutLayer */}
        <FormLayoutLayer />

      </MasterLayout>

    </>
  );
};

export default FormLayoutPage;
