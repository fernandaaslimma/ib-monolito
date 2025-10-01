import React from "react";

const FlagCNY = ({ width = "23", height = "16" }) => {
  return (
    <svg
    width={width}
    height={height}
      viewBox="0 0 23 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" width="22" height="16" rx="2" fill="white" />
      <mask
        id="mask0_4722_49176"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="16"
      >
        <rect x="0.5" width="22" height="16" rx="2" fill="white" />
      </mask>
      <g mask="url(#mask0_4722_49176)">
        <rect x="0.5" width="22" height="16" fill="#F1361D" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.41406 2.48083L9.17498 2.61291L9.74568 3.14211L9.8754 2.36735L10.3951 1.78628L9.63423 1.6542L9.06353 1.125L8.93381 1.89976L8.41406 2.48083ZM10.4522 5.19065L11.1116 4.78205L11.8833 4.80022L11.482 4.12885L11.4998 3.34313L10.8405 3.75173L10.0688 3.73355L10.4701 4.40492L10.4522 5.19065ZM9.55775 9.57692L8.91278 10.0087L8.90368 9.22282L8.47961 8.56612L9.25146 8.55686L9.89643 8.12508L9.90553 8.91096L10.3296 9.56766L9.55775 9.57692ZM10.1179 7.54537L10.8851 7.45878L11.5769 7.80732L11.4919 7.02617L11.8342 6.32174L11.067 6.40832L10.3751 6.05979L10.4602 6.84094L10.1179 7.54537Z"
          fill="#FFDC42"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.73661 6.58179L3.88928 7.92264L4.57088 5.71944L2.74757 4.34493L5.01615 4.32414L5.73661 2.13379L6.45706 4.32414L8.72564 4.34493L6.90233 5.71944L7.58393 7.92264L5.73661 6.58179Z"
          fill="#FFDC42"
        />
      </g>
    </svg>
  );
};

export default FlagCNY;
