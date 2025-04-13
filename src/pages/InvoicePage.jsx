import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InvoiceLayer from "../components/InvoiceLayer";




const InvoicePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Invoice" />

        {/* InvoiceLayer */}
        <InvoiceLayer />

      </MasterLayout>

    </>
  );
};

export default InvoicePage;
