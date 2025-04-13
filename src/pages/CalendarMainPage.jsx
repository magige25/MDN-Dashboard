import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import CalendarMainLayer from "../components/CalendarMainLayer.jsx";


const CalendarMainPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Calendar" />

        {/* CalendarMainLayer */}
        <CalendarMainLayer />


      </MasterLayout>
    </>
  );
};

export default CalendarMainPage;
