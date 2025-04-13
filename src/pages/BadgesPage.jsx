import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import BadgesLayer from "../components/BadgesLayer.jsx";


const BadgesPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Badges" />

        {/* BadgesLayer */}
        <BadgesLayer />


      </MasterLayout>
    </>
  );
};

export default BadgesPage;
