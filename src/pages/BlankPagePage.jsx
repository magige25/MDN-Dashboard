import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import BlankPageLayer from "../components/BlankPageLayer.jsx";

const BlankPagePage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Blank Page' />

        {/* BlankPageLayer */}
        <BlankPageLayer />
      </MasterLayout>
    </>
  );
};

export default BlankPagePage;
