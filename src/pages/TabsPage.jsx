import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TabsLayer from "../components/TabsLayer.jsx";

const TabsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Tab & Accordion" />

        {/* TabsLayer */}
        <TabsLayer />

      </MasterLayout>

    </>
  );
};

export default TabsPage; 
