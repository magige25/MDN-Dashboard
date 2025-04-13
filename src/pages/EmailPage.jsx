import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import EmailLayer from "../components/EmailLayer.jsx";


const EmailPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Email" />

        {/* EmailLayer */}
        <EmailLayer />


      </MasterLayout>
    </>
  );
};

export default EmailPage;
