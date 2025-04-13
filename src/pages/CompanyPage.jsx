import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import CompanyLayer from "../components/CompanyLayer.jsx";


const CompanyPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Company" />

        {/* CompanyLayer */}
        <CompanyLayer />


      </MasterLayout>
    </>
  );
};

export default CompanyPage;
