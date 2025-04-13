import React from 'react';
import SalesStatisticOne from './child/SalesStatisticOne.jsx';
import TotalSubscriberOne from './child/TotalSubscriberOne.jsx';
import UsersOverviewOne from './child/UsersOverviewOne.jsx';
import LatestRegisteredOne from './child/LatestRegisteredOne.jsx';
import TopPerformerOne from './child/TopPerformerOne.jsx';
import TopCountries from './child/TopCountries.jsx';
import GeneratedContent from './child/GeneratedContent.jsx';
import UnitCountOne from './child/UnitCountOne.jsx';

const DashBoardLayerOne = () => {
  return (
    <>
      <UnitCountOne />
      <section className="row gy-4 mt-1">
        <SalesStatisticOne />
        <TotalSubscriberOne />
        <UsersOverviewOne />
        <LatestRegisteredOne />
        <TopPerformerOne />
        <TopCountries />
        <GeneratedContent />
      </section>
    </>
  );
};

export default DashBoardLayerOne;