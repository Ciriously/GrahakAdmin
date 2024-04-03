import React, { useState } from 'react';
import ChatCard from '../../Chat/ChatCard';

const TabsSwitcher = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Inbox</h1>
        <p className="text-2xl mb-3 font-medium">34</p>
      </div>
      <input
        className="w-full px-8 py-2 text-gray-700 border rounded-lg focus:outline-none"
        type="search"
        placeholder="Search..."
      />
      <div className="mb-4">
        <ul className="flex justify-center -mb-px text-lg font-medium text-center">
          <li className="me-4" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === 'all'
                  ? 'border-b-2 border-green-600 text-green-600 font-bold hover:text-green-600 dark:text-green-500 dark:hover:text-green-500 hover:border-green-600 dark:border-green-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
              onClick={() => handleTabClick('all')}
            >
              All
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg ${
                activeTab === 'mine'
                  ? 'border-b-2 border-green-600 text-green-600 hover:text-green-600 dark:text-green-500 dark:hover:text-green-500 border-green-600 dark:border-green-500'
                  : 'text-gray-500 hover:text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
              onClick={() => handleTabClick('mine')}
            >
              Mine
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'all' ? 'block' : 'hidden'
          }`}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is the content for the All tab.
          </p>
        </div>
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'mine' ? 'block' : 'hidden'
          }`}
        >
          <ChatCard />
        </div>
      </div>
    </div>
  );
};

export default TabsSwitcher;
