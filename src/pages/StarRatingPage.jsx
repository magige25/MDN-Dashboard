import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import StarRatingLayer from "../components/StarRatingLayer.jsx";

const StarRatingPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Star Ratings" />

        {/* StarRatingLayer */}
        <StarRatingLayer />

      </MasterLayout>

    </>
  );
};

export default StarRatingPage; 
