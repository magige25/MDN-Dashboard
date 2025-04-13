import React from "react";
import MasterLayout from "../MasterLayout.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import NotificationAlertLayer from "../components/NotificationAlertLayer.jsx";

const NotificationAlertPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Notification Alert" />

        {/* NotificationAlertLayer */}
        <NotificationAlertLayer />

      </MasterLayout>

    </>
  );
};

export default NotificationAlertPage; 
