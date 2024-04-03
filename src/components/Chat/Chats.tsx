import React from 'react';
import ChatsHeader from './Chats/ChatHeader';
import ChatWindow from './Chats/ChatWindow';

const Chats = () => {
  return (
    <div>
      <div className="container  bg-white flex flex-col rounded-3xl  p-8">
        <ChatsHeader />
        <hr className="border-t-1 border-[#F1F3F9]" />

        <div className="mt-4">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Chats;
