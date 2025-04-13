import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ImageUploadLayer from "../components/ImageUploadLayer.jsx";

const ImageUploadPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Image Upload" />

        {/* ImageUploadLayer */}
        <ImageUploadLayer />

      </MasterLayout>

    </>
  );
};

export default ImageUploadPage;
