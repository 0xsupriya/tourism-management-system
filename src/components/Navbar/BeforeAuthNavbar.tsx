import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HomeIcon, CompassIcon, CalendarIcon } from "lucide-react";

export const BeforeAuthNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg py-4 px-8 flex justify-between items-center">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-1 ">
        <Link to="/" className="text-2xl font-bold pl-15">
          <span className="text-black">X</span>
          <span className="text-blue-600">plora</span>
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-grow flex justify-center">
        <SearchBar className="w-1/2" />
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex items-center space-x-7">
        <Link
          to="/"
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
        >
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
        >
          <CompassIcon className="w-5 h-5" />
          <span>Explore</span>
        </Link>
        <Link to="/signup">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg transition ease-in-out duration-300">
            <CalendarIcon className="w-5 h-5" />
            <span>Book Now</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default BeforeAuthNavbar;
