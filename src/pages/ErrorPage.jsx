import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb";
import ErrorLayer from "../components/ErrorLayer";


const ErrorPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="404" />

        {/* ErrorLayer */}
        <ErrorLayer />


      </MasterLayout>
    </>
  );
};

export default ErrorPage;
