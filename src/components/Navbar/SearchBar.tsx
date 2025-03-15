import React from "react";

export const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        placeholder="Search destinations..."
        className="w-[400px] pl-4 pr-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  );
};
