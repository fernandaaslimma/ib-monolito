import React from "react";

function MobileWarning() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M1.222 2.222H79V80H1.222z" />
        <path
          stroke="#27445F"
          strokeWidth="4.595"
          d="M20.972 20.964l33.611-.276M20.972 57.21l33.75-.116"
        />
        <path
          stroke="#27445F"
          strokeLinejoin="round"
          strokeWidth="4.556"
          d="M22.696 66.781V10.89h32.222V66.78H22.696z"
        />
        <g transform="translate(33.333 39.383)">
          <ellipse
            cx="19.444"
            cy="19.307"
            fill="#F6F9FB"
            rx="19.444"
            ry="19.307"
          />
          <ellipse
            cx="19.694"
            cy="19.612"
            stroke="#27445F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.556"
            rx="14.202"
            ry="14.092"
          />
          <path
            stroke="#27445F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.594"
            d="M19.66 12.747v7.84M19.66 27.64V27.4"
          />
        </g>
      </g>
    </svg>
  );
}

export default MobileWarning;
