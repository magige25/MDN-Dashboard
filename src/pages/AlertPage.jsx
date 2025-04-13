import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import AlertLayer from "../components/AlertLayer.jsx";


const AlertPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Alerts" />

        {/* AlertLayer */}
        <AlertLayer />


      </MasterLayout>
    </>
  );
};

export default AlertPage;
