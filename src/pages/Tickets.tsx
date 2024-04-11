import React from 'react';
import TicketCard from '../components/Tickets/TicketCard';
import DefaultLayout from '../layout/DefaultLayout';

const Tickets = () => {
  return (
    <DefaultLayout>
      <div className="mt-4 flex gap-4 md:mt-6 md:gap-6 2xl:mt-0 2xl:gap-7.5">
        <div className="w-1/3">
          <TicketCard
            ticketId="T12345"
            status="Closed"
            title="Example Ticket"
            content="This is an example ticket."
            priority="High"
            typeOfTicket="Delivery"
            createdAt={new Date()} // Replace with actual date
          />
        </div>
        <div className="w-4/5"></div>
      </div>
    </DefaultLayout>
  );
};

export default Tickets;
