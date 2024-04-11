import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import TicketColumn from '../components/Tickets/TicketColumn';

const Tickets = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 flex bg-white gap-4 md:mt-6 md:gap-6 2xl:mt-0 2xl:gap-7.5">
        <div className="w-full">
          <TicketColumn />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tickets;
