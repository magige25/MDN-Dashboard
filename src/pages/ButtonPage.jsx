import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ButtonLayer from "../components/ButtonLayer.jsx";


const ButtonPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Button" />

        {/* ButtonLayer */}
        <ButtonLayer />


      </MasterLayout>
    </>
  );
};

export default ButtonPage;
