import React from 'react';

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <div className="relative">
          <img
            className="h-16 w-16 rounded-3xl object-cover"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Avatar"
          />
          <div className="absolute inset-0 rounded-full shadow-inner" />
        </div>
        <div className="ml-4">
          <h2 className="font-bold text-gray-800 text-lg">Jane Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
      </div>

      <div className="space-x-3 mb-8">
        <span className="bg-[#FFEAD1]  text-black inline-block text-center px-2 py-1 rounded-xl text-sm font-medium">
          New Customer
        </span>
        <span className=" text-[#006A66] inline-block text-center px-2 py-1 rounded text-sm font-medium">
          View Profile
        </span>
      </div>
    </div>
  );
};

export default ChatHeader;
