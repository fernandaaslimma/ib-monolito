import React from "react";

function LinkArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-286 -1114)">
          <use fill="#000" filter="url(#a)" xlinkHref="#b" />
          <use fill="#FFF" xlinkHref="#b" />
        </g>
        <g fill="currentColor">
          <rect width="6" height="2" x="2" y="5" rx=".5" />
          <path d="M10.8 6L6 9.6V2.4z" />
        </g>
      </g>
    </svg>
  );
}

export default LinkArrow;
