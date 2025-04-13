import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import TestimonialsLayer from "../components/TestimonialsLayer.jsx";

const TestimonialsPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>
        {/* Breadcrumb */}
        <Breadcrumb title='Testimonials' />

        {/* TestimonialsLayer */}
        <TestimonialsLayer />
      </MasterLayout>
    </>
  );
};

export default TestimonialsPage;
