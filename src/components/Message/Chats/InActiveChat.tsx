import React from 'react';
import Image from '../Chats/inactive.svg';

const InActiveChat = () => {
  return (
    <div className="container mx-auto bg-white flex flex-col rounded-3xl items-center p-4">
      <img src={Image} alt="Description" />
      <p className="text-center mt-2">Your first text</p>
      <p className="text-center mt-2">Your second text</p>
    </div>
  );
};

export default InActiveChat;
