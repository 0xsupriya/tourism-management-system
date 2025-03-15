import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useAuth } from "../../context/authContext";

export const AfterAuthNavbar = () => {
  const { logout } = useAuth();

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
            to="/profile"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Profile
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
