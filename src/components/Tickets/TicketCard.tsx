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
      statusColor = 'bg-yellow-100';
      textColor = 'text-yellow-500';
      break;
    case 'closed':
      statusColor = 'bg-green-100';
      textColor = 'text-green-500';
      break;
    default:
      statusColor = 'bg-gray-500';
      textColor = 'text-gray-500';
  }

  // Determine the background color and text color of the priority badge based on the ticket priority
  let priorityColor: string;
  let fontColor: string;
  switch (priority.toLowerCase()) {
    case 'low':
      priorityColor = 'bg-blue-100';
      fontColor = 'text-blue-700';
      break;
    case 'medium':
      priorityColor = 'bg-yellow-100';
      fontColor = 'text-yellow-700';
      break;
    case 'high':
      priorityColor = 'bg-red-100';
      fontColor = 'text-red-700';
      break;
    default:
      priorityColor = 'bg-gray-100';
      fontColor = 'text-gray-700';
  }
  return (
    <div className="bg-white rounded-xl p-6 h-auto md:h-50">
      <div className="mb-4">
        {/* Ticket ID, Status, and TypeOfTicket badges */}
        <div className="flex mb-2">
          <div className="border-2 font-bold border-slate-600 mr-1 bg-gray rounded-full px-4 text-xs text-slate-600 py-0.5">
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
        {/* Title Header Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <span>{createdAt.toLocaleDateString()}</span>
        </div>
        <p className="text-gray-600">{content}</p>
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
