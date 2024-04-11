// TicketColumn.tsx
import React from 'react';
import TicketCard from './TicketCard';
import { Ticket, ticketData } from './TicketData';

const TicketColumn: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-red-500';
      case 'paused':
        return 'bg-[#FFC145]';
      case 'closed':
        return 'bg-[#7EA131]';
      default:
        return 'bg-gray-500';
    }
  };

  const getBorderColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'border-red-500';
      case 'paused':
        return 'border-[#FFC145]';
      case 'closed':
        return 'border-[#7EA131]';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <div className="flex space-x-4">
      {ticketData.map((ticketList, index) => (
        <div
          key={index}
          className="flex flex-col flex-1 bg-[#F9F9F9] rounded-2xl"
        >
          <div
            className={`flex items-center border-b-4 px-8 py-4 ${getBorderColor(
              ticketList[0].status,
            )}`}
          >
            <div
              className={`h-2 w-2 rounded-full ${getStatusColor(
                ticketList[0].status,
              )} mr-2`}
            ></div>
            <h2 className="text-lg font-semibold mb-0">
              {ticketList[0].status}
            </h2>
          </div>
          <div className="py-2 px-4 space-y-4">
            {ticketList.map((ticket, ticketIndex) => (
              <TicketCard key={ticketIndex} {...ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketColumn;
