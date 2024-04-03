import React from 'react';

const QueryCard = () => {
  return (
    <div>
      <div className="bg-white p-6 w-full rounded-3xl shadow-md">
        <h2 className="text-2xl text-black font-semibold mb-4">Query Trend</h2>
        <p className="text-md text-gray-800 mb-2">
          Hotel was rubbish! trying to return an item I purchased from your
          website, but I'm having trouble initiating the return process online
        </p>
        <div className="border-b mb-4"></div> {/* Separator line */}
        <p className="text-md text-gray-800 mb-2">
          I'm interested in purchasing a laptop for gaming purposes, but I'm not
          sure which model would be best suited for my needs.
        </p>
        <div className="border-b mb-4"></div> {/* Separator line */}
        <p className="text-md text-gray-800 mb-2">
          I recently purchased a blender from your website, but it seems to be
          malfunctioning. The motor makes strange noises, and it's not blending
          ingredients properly.
        </p>
        <div className="border-b mb-4"></div> {/* Separator line */}
        {/* Add more texts as needed */}
        <h2 className="text-2xl text-black font-semibold mb-4">
          Trending Query Categories
        </h2>
        <p className="text-md text-gray-800 mb-2">Hotel Refund!</p>
        <p className="text-md text-gray-800 mb-2">Boat Service!</p>
        <p className="text-md text-gray-800 mb-2">Product issue!</p>
      </div>
    </div>
  );
};

export default QueryCard;
