import React from "react";

const SvgCurve = () => {
  return (
    <svg
      viewBox="0 0 500 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-48"
    >
      {/* Background */}
      <rect width="500" height="200" fill="#f9fafb" />

      {/* Curve Path */}
      <path
        d="M 0 150 C 150 50, 350 250, 500 150"
        stroke="#3b82f6"
        strokeWidth="4"
        fill="transparent"
      />

      {/* Points to visualize control handles */}
      <circle cx="0" cy="150" r="5" fill="red" />
      <circle cx="150" cy="50" r="5" fill="green" />
      <circle cx="350" cy="250" r="5" fill="green" />
      <circle cx="500" cy="150" r="5" fill="red" />
    </svg>
  );
};

export default SvgCurve;
