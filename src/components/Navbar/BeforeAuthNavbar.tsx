import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiHome, FiMap } from "react-icons/fi";

export const BeforeAuthNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfileMenu = () => setProfileOpen(!profileOpen);

  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          X<span className="text-blue-600">plora</span>
        </h1>

        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition flex items-center"
          >
            <FiHome className="mr-1" /> Home
          </Link>
          <Link
            to="/explore"
            className="text-gray-700 hover:text-blue-600 transition flex items-center"
          >
            <FiMap className="mr-1" /> Explore
          </Link>

          {/* Profile Icon */}
          <div className="relative">
            <FaUserCircle
              onClick={toggleProfileMenu}
              className="text-3xl text-gray-700 hover:text-blue-600 cursor-pointer"
            />

            {/* Dropdown menu for profile */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    // Add logout function here
                    console.log("Logged out");
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 text-3xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-lg mt-2 p-4 space-y-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/explore"
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Explore
          </Link>
          <button
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};
