import React from 'react';

interface TicketCardProps {
  ticketId: string;
  status: string;
  title: string;
  content: string;
  priority: string;
  createdAt: Date;
  typeOfTicket: string; // New prop for the type of ticket
}

const TicketCard: React.FC<TicketCardProps> = ({
  ticketId,
  status,
  title,
  content,
  priority,
  createdAt,
  typeOfTicket,
}) => {
  // Determine the background color and text color of the status badge based on the ticket status
  let statusColor: string;
  let textColor: string;
  switch (status.toLowerCase()) {
    case 'open':
      statusColor = 'bg-red-100';
      textColor = 'text-red-500';
      break;
    case 'paused':
      statusColor = 'bg-[#E9C400] bg-opacity-10';
      textColor = 'text-[#E9C400]';
      break;
    case 'closed':
      statusColor = 'bg-green-100';
      textColor = 'text-green-500';
      break;
    default:
      statusColor = 'bg-gray-100';
      textColor = 'text-gray-500';
  }

  // Determine the background color and text color of the priority badge based on the ticket priority
  let priorityColor: string;
  let fontColor: string;
  switch (priority.toLowerCase()) {
    case 'low':
      priorityColor = 'bg-[#D58D49] bg-opacity-20';
      fontColor = 'text-[#D58D49]';
      break;
    case 'medium':
      priorityColor = 'bg-yellow-100 bg-opacity-20';
      fontColor = 'text-yellow-400';
      break;
    case 'high':
      priorityColor = 'bg-[#D8727D] bg-opacity-10';
      fontColor = 'text-[#D8727D]';
      break;
    default:
      priorityColor = 'bg-gray-100';
      fontColor = 'text-gray-700';
  }
  return (
    <div className="bg-white rounded-xl p-6 h-full md:h-max">
      <div className="mb-4">
        {/* Ticket ID, Status, and TypeOfTicket badges */}
        <div className="flex mb-2">
          <div className="border-2 font-bold border-slate-600 mr-1 bg-slate-100 rounded-full px-4 text-xs text-slate-900 py-0.5">
            #{ticketId}
          </div>
          <div
            className={`border-2 font-bold rounded-full px-4 text-xs py-0.5 ${statusColor} ${textColor}`}
          >
            {status}
          </div>
          <div
            className={`border-2 font-bold rounded-full px-4 text-xs py-0.5 bg-purple-100 text-purple-500 ml-1`}
          >
            {typeOfTicket}
          </div>
        </div>

        {/* Title Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg text-[#0D062D] font-semibold mb-2">{title}</h2>
          <span>{createdAt.toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>

      {/* Priority and Time Created */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>
          Created{' '}
          {Math.floor((Date.now() - createdAt.getTime()) / 1000 / 60 / 60)}{' '}
          hours ago
        </span>

        <span>
          <div
            className={`border-2 font-bold rounded-full px-4 text-sm py-0.5 ${fontColor} ${priorityColor}`}
          >
            {priority}
          </div>
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
