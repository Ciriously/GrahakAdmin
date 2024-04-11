import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import TicketColumn from '../components/Tickets/TicketColumn';
import Header from '../components/Tickets/Component/Header';

const Tickets = () => {
  return (
    <DefaultLayout>
      <div className=" bg-white container rounded-3xl px-8 py-4 ">
        <Header />

        <div className="mt-4 flexgap-4 md:mt-6 md:gap-6 2xl:mt-0 2xl:gap-7.5">
          <div className="w-full">
            <TicketColumn />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tickets;
