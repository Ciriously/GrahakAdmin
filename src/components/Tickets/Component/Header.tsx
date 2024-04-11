import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-end items-center p-4">
      <div className="flex items-center space-x-4">
        {/* Button 1 */}
        <button
          type="button"
          className="py-2 flex justify-center items-center bg-white border-[#006A66] border-2 text-[#006A66] w-44 transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          + Add Ticket
        </button>
        {/* Button 2 */}
        <div className="relative pr-2 rounded-xl ml-4">
          <img
            src=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <div className="relative">
            <input
              className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search Tickets"
            />
            <div className="absolute right-0 inset-y-0 flex items-center"></div>
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Button 3 */}
        <button
          type="button"
          className="py-2 flex justify-center items-center bg-white border-[#787486] border-2 text-[#787486] w-18 transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Filter
        </button>
        {/* Button 4 */}
        <button
          type="button"
          className="py-2 flex justify-center items-center bg-white border-[#787486] border-2 text-[#787486] w-18 transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Date
        </button>
      </div>
    </div>
  );
};

export default Header;
