import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import DashBoardLayerOne from "../components/DashBoardLayerOne.jsx";

const HomePageOne = () => {
  return (
    <>
      <MasterLayout>
        <Breadcrumb title="Dashboard" />
        <DashBoardLayerOne />
      </MasterLayout>
    </>
  );
};

export default HomePageOne;