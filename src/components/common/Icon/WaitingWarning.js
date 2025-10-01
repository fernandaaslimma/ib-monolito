import React from "react";

function WaitingWarning({ iconColor = "currentColor" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22">
      <g
        fill={iconColor}
        fillRule="nonzero"
        stroke="currentColor"
        strokeWidth=".5"
      >
        <g transform="translate(9.267 5.547)">
          <path d="M1.494 6.2a.826.826 0 0 1-.827-.826V.827a.826.826 0 1 1 1.653 0v4.547c0 .457-.37.826-.826.826z" />
          <circle cx="1.494" cy="8.946" r="1" />
        </g>
        <path d="M10.92 20.841c-5.47 0-9.92-4.45-9.92-9.92S5.45 1 10.92 1s9.92 4.45 9.92 9.92-4.45 9.92-9.92 9.92zm0-18.187c-4.558 0-8.267 3.709-8.267 8.267s3.71 8.267 8.267 8.267c4.559 0 8.267-3.71 8.267-8.267 0-4.558-3.708-8.267-8.267-8.267z" />
      </g>
    </svg>
  );
}

export default WaitingWarning;
