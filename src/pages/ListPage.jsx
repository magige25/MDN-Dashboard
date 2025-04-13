import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ListLayer from "../components/ListLayer.jsx";

const ListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / List" />

        {/* ListLayer */}
        <ListLayer />

      </MasterLayout>

    </>
  );
};

export default ListPage; 
