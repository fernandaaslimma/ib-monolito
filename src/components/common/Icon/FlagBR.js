import React from "react";

function FlagBR() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14"
      viewBox="0 0 20 14"
    >
      <defs>
        <circle id="a" cx="3.5" cy="3.5" r="3.5" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#009B3A" fillRule="nonzero" d="M0 0h20v14H0z" />
        <path
          fill="#FEDF00"
          fillRule="nonzero"
          d="M1.75 7L10 12.25 18.25 7 10 1.75z"
        />
        <circle cx="10" cy="7" r="3.5" fill="#002776" fillRule="nonzero" />
        <g transform="translate(6.5 3.5)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M0 4.5a3.5 3.5 0 0 1 6.5 0h-.25a3.25 3 0 0 0-6 0H0z"
            mask="url(#b)"
          />
        </g>
      </g>
    </svg>
  );
}

export default FlagBR;
