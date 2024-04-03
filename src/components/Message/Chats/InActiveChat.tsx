import React from 'react';
import Image from '../Chats/inactive.svg';

const InActiveChat = () => {
  return (
    <div className="container mx-auto bg-white flex flex-col rounded-3xl items-center p-8">
      <img src={Image} alt="Description" width={550} />
      <p className="text-center text-[#006A66] font-bold  text-3xl mt-2">
        No Active Inbox
      </p>
      <p className="text-center text-black text-2xl font-bold mt-2 mb-6">
        Accept chat requests to reply
      </p>
    </div>
  );
};

export default InActiveChat;
