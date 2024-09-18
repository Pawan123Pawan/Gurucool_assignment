import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-purple-500 to-pink-500">
      <div
        className="bg-white text-center p-10 rounded-lg shadow-xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 7px 29px 0px" }}
      >
        <h1 className="text-5xl font-bold text-blue-700 mb-6">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-4">
          We appreciate your submission. We'll get back to you soon.
        </p>
        <svg
          className="mx-auto mb-6 w-20 h-20 text-green-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
