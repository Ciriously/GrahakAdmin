import React from 'react';
import { Link } from 'react-router-dom';

import Chat from './images/Chat.svg';
import Web from './images/Web.svg';
import Spam from './images/Spam.svg';

const Chatbtns = () => {
  return (
    <div
      className="flex flex-col items-center space-y-4"
      style={{ overflow: 'hidden' }}
    >
      <Link
        to="Chatlist"
        className="inline-flex items-center  mt-4 justify-center gap-3 rounded-md bg-[#B8E1E2] py-2 px-6 text-center font-bold text-[#006A66] hover:bg-opacity-90 lg:px-4 xl:px-6 w-3/5 "
      >
        <span>
          <img src={Chat} alt="Chat" />
        </span>
        Chat List
      </Link>

      <Link
        to="#"
        className="inline-flex items-center justify-center gap-3 rounded-md bg-[#B8E1E2] py-2 px-6 text-center font-bold text-[#006A66] hover:bg-opacity-90 lg:px-4 xl:px-6 w-3/5 "
      >
        <span>
          <img src={Web} alt="Web" />
        </span>
        Chat Web
      </Link>

      <Link
        to="#"
        className="inline-flex items-center justify-center gap-3 rounded-md bg-[#B8E1E2] py-2 px-6 text-center font-bold text-[#006A66] hover:bg-opacity-90 lg:px-4 xl:px-6 w-3/5 "
      >
        <span>
          <img src={Spam} alt="Spam" />
        </span>
        Spam Chats
      </Link>
    </div>
  );
};

export default Chatbtns;
