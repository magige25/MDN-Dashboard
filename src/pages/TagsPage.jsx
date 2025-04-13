import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TagsLayer from "../components/TagsLayer.jsx";

const TagsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Components / Tags" />

        {/* TagsLayer */}
        <TagsLayer />

      </MasterLayout>

    </>
  );
};

export default TagsPage; 
