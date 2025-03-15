import React, { useState } from "react";
import { supabase } from "../../client/supabaseClient";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User has been created!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-20 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">
          Create an Account
        </h2>

        {/* Success/Error Message */}
        {message && (
          <div className="text-center mb-4 text-green-600 font-semibold">
            {message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Sign In */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};
