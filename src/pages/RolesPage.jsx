import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import RolesLayer from "../components/RolesLayer";

const RolesPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Roles" />

        {/* RolesLayer */}
        <RolesLayer />

      </MasterLayout>

    </>
  );
};

export default RolesPage; 
