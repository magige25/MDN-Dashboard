import React from "react";
import MasterLayout from "../MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import UsersLayer from "../components/UsersLayer";

const UsersPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Users" />

        {/* UsersLayer */}
        <UsersLayer />

      </MasterLayout>

    </>
  );
};

export default UsersPage; 
