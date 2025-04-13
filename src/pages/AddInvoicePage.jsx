import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import AddInvoiceLayer from "../components/AddInvoiceLayer";




const AddInvoicePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Add Invoice" />

        {/* AddInvoiceLayer */}
        <AddInvoiceLayer />

      </MasterLayout>

    </>
  );
};

export default AddInvoicePage;
