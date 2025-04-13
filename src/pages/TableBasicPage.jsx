import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TableBasicLayer from "../components/TableBasicLayer.jsx";

const TableBasicPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Basic Table" />

        {/* TableBasicLayer */}
        <TableBasicLayer />

      </MasterLayout>

    </>
  );
};

export default TableBasicPage; 
