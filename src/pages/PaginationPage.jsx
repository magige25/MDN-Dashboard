import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import PaginationLayer from "../components/PaginationLayer.jsx";

const PaginationPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Pagination" />

        {/* PaginationLayer */}
        <PaginationLayer />

      </MasterLayout>

    </>
  );
};

export default PaginationPage; 
