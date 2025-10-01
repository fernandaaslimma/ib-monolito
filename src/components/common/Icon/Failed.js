import React from "react";

function Failed({ iconColor = "#27445F" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h79.463v80H0z" />
        <path
          stroke={iconColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.726"
          d="M44.817 17.202l26.821 43.395a4.571 4.571 0 0 1-3.888 6.974H13.326a4.571 4.571 0 0 1-3.857-7.025l27.603-43.395a4.571 4.571 0 0 1 7.745.05zm-4.34 17.019v11.636m0 8v-.25"
        />
      </g>
    </svg>
  );
}

export default Failed;
