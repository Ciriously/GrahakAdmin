import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => handleClick(1)}
          className="ring-2 ring-gray px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 border  text-gray-600 -2 rounded-lg focus:outline-none"
        >
          1
        </button>
        <button
          onClick={() => handleClick(2)}
          className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600  rounded-lg focus:outline-none"
        >
          2
        </button>
        <button
          onClick={() => handleClick(3)}
          className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600  rounded-lg focus:outline-none"
        >
          3
        </button>
        <span className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">
          ...
        </span>
        <button
          onClick={() => handleClick(21)}
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600  rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          21
        </button>
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600  rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
