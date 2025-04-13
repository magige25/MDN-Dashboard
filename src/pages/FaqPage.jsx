import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import FaqLayer from "../components/FaqLayer.jsx";


const FaqPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Faq" />

        {/* FaqLayer */}
        <FaqLayer />


      </MasterLayout>
    </>
  );
};

export default FaqPage;
