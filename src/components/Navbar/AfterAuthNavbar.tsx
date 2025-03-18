import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Home, User, MapPin } from "lucide-react"; // Icons for the navigation links

export const AfterAuthNavbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
      {/* Left Section: Xplora */}
      <div className="flex items-center space-x-1">
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
      <div className="flex items-center space-x-6 text-base">
        <Link to="/" className="flex items-center text-gray-800 space-x-1">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link
          to="/explore"
          className="flex items-center text-gray-800 space-x-1"
        >
          <MapPin size={20} />
          <span>Explore</span>
        </Link>
        <Link
          to="/profile"
          className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg space-x-1"
        >
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default AfterAuthNavbar;
