import React from 'react';
import CardDataStats from '../../components/Dashboard/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';

import ActiveUsers from '../../components/Dashboard/images/Card/Active-users.svg';
import ActiveTickets from '../../components/Dashboard/images/Card/Active-tickets.svg';
import InboxAccepted from '../../components/Dashboard/images/Card/Inbox-accepted.svg';
import InboxMissed from '../../components/Dashboard/images/Card/Inbox-mixed.svg';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Active Users" total="40,689" rate="8.5%" levelUp>
          <img src={ActiveUsers} alt="Active Users" />
        </CardDataStats>
        <CardDataStats
          title="Active Tickets"
          total="10293"
          rate="4.35%"
          levelUp
        >
          <img src={ActiveTickets} alt="Active Tickets" />
        </CardDataStats>
        <CardDataStats
          title="Inbox Accepted"
          total="$89,000"
          rate="2.59%"
          levelUp
        >
          <img src={InboxAccepted} alt="Inbox Accepted" />
        </CardDataStats>
        <CardDataStats
          title="Inbox Missed"
          total="3.456"
          rate="0.95%"
          levelDown
        >
          <img src={InboxMissed} alt="Inbox Missed" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}
        {/* <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
        {/* <ChatCard /> */}
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
