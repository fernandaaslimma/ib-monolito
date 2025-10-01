import React from "react";

function IconBack({ iconColor = "#4a90e2", width = "24", height = "24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill={iconColor}
          fillRule="nonzero"
          stroke={iconColor}
          strokeWidth=".2"
          d="M16.703 18.326L9.322 12l7.38-6.305c.374-.383.374-1.006 0-1.408a.967.967 0 0 0-1.374 0L7.28 11.296c-.373.382-.373 1.006 0 1.408l8.068 7.01a.967.967 0 0 0 1.375 0 .982.982 0 0 0-.02-1.388z"
        />
      </g>
    </svg>
  );
}

export default IconBack;
