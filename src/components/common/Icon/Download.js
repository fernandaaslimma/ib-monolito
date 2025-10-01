import React from "react";

function Download({ iconColor = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="24"
      viewBox="0 0 26 24"
    >
      <path
        fill={iconColor}
        fillRule="nonzero"
        stroke="currentColor"
        strokeWidth=".2"
        d="M14.065 5.637h-1.686v8.925l-2.528-2.537-1.197 1.197 3.97 3.961a.817.817 0 0 0 .598.253.79.79 0 0 0 .59-.253l3.97-3.96-1.189-1.198-2.528 2.537V5.637zm5.056 11.63v1.686H7.323v-1.686H5.637v2.529c0 .232.082.428.245.59a.817.817 0 0 0 .598.252h13.484a.79.79 0 0 0 .59-.252.79.79 0 0 0 .253-.59v-2.529h-1.686z"
      />
    </svg>
  );
}

export default Download;
