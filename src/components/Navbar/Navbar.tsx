import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/signup");
  };

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
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/explore"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Explore
          </Link>
          <Link
            to="/aboutUs"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <button
            onClick={handleBookNow}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-600 text-3xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

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
          <Link
            to="/aboutUs"
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
          <button
            onClick={toggleMenu}
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};
