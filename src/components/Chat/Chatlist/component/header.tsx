import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold text-black">Chat List</h1>
      <div className="flex items-center">
        <button
          type="button"
          className="py-2 flex justify-center items-center text-white bg-[#006A66] w-44 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mr-4"
        >
          Download
          <svg
            className="pl-2"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_496_1668)">
              <path
                d="M8.66455 16.8301L12.5423 20.7078L16.4201 16.8301"
                stroke="white"
                stroke-width="1.93888"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5425 11.9834V20.7083"
                stroke="white"
                stroke-width="1.93888"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1512 17.8872C21.9941 17.2945 22.6261 16.4487 22.9556 15.4725C23.2852 14.4962 23.295 13.4404 22.9838 12.4582C22.6726 11.4759 22.0566 10.6184 21.225 10.0101C20.3934 9.40172 19.3896 9.07419 18.3592 9.07499H17.1378C16.8462 7.93869 16.3006 6.88333 15.5422 5.98838C14.7837 5.09343 13.8321 4.3822 12.759 3.90823C11.6859 3.43427 10.5193 3.20992 9.3469 3.25208C8.17454 3.29424 7.02702 3.60181 5.99073 4.15163C4.95444 4.70145 4.05638 5.4792 3.36417 6.42632C2.67196 7.37344 2.20362 8.46526 1.99443 9.61957C1.78523 10.7739 1.84062 11.9606 2.15644 13.0904C2.47225 14.2202 3.04025 15.2637 3.81768 16.1422"
                stroke="white"
                stroke-width="1.93888"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_496_1668">
                <rect
                  width="23.2665"
                  height="23.2665"
                  fill="white"
                  transform="translate(0.90918 0.349609)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          type="button"
          className="py-2 flex justify-center items-center bg-[#B8E1E2] border-[#006A66] border-2 text-[#006A66] w-44 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          Filter
          <svg
            width={20}
            height={20}
            fill="currentColor"
            className="ml-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
          </svg>
        </button>

        <div className="relative border border-slate-200 pr-2 rounded-xl ml-4">
          <img
            src=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <div className="relative">
            <input
              className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search..."
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
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
      </div>
    </div>
  );
};

export default Header;
