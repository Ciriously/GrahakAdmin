import { Link } from 'react-router-dom';
import { Chat } from '../../types/chat';
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import UserFive from '../../images/user/user-05.png';
import Chatbtns from '../Message/Inbox/Chatbtns';

const chatData: Chat[] = [
  {
    avatar: UserOne,
    name: 'Devid Heilo',
    text: 'How are you?',
    time: 12,
    textCount: 3,
    color: '#10B981',
  },
  {
    avatar: UserTwo,
    name: 'Henry Fisher',
    text: 'Waiting for you!',
    time: 12,
    textCount: 1,
    color: '#DC3545',
  },
  {
    avatar: UserFour,
    name: 'Jhon Doe',
    text: "What's up?",
    time: 32,
    textCount: 2,
    color: '#10B981',
  },
  {
    avatar: UserFive,
    name: 'Jane Doe',
    text: 'Great',
    time: 32,
    textCount: 2,
    color: '#FFBA00',
  },
  {
    avatar: UserOne,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    color: '#10B981',
  },
  {
    avatar: UserThree,
    name: 'Jhon Doe',
    text: 'How are you?',
    time: 32,
    textCount: 3,
    color: '#FFBA00',
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 container overflow-auto mx-auto rounded-sm bg-white h-[31.5rem]">
      <div>
        {chatData.map((chat, key) => (
          <Link
            to="/"
            className="flex items-center gap-5 py-4 px-3 hover:bg-gray-3 "
            key={key}
          >
            <div className="relative h-14 w-14 rounded-2xl">
              <img src={chat.avatar} alt="User" />
              <span
                className="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white"
                style={{ backgroundColor: chat.color }}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex">
                  {chat.textCount === 1 && (
                    <span className="bg-[#F4B425] bg-opacity-20 text-[#FC8B3F] inline-block text-center min-w-20 px-2 py-1 rounded-xl text-sm font-medium">
                      Live
                    </span>
                  )}
                  {chat.textCount === 2 && (
                    <span className="bg-[#B8E1E2] text-[#006A66] inline-block text-center min-w-20 px-2 py-1 rounded-xl text-sm font-medium">
                      Accept
                    </span>
                  )}
                  {chat.textCount === 3 && (
                    <span className="bg-[#D9352E] bg-opacity-20 text-[#D9352E] inline-block text-center min-w-20 px-2 py-1 rounded-xl text-sm font-medium">
                      Missed
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <Chatbtns />
    </div>
  );
};

export default ChatCard;
