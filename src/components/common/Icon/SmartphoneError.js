import React from "react";

function SmartphoneError() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="56"
      height="100"
      viewBox="0 0 56 100"
    >
      <defs>
        <path id="a" d="M0 .749h55.614V99.13H0z" />
        <path id="c" d="M0 99.251h55.615V.87H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 .12)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#003B77"
            d="M45.203 99.13H10.411C4.66 99.13 0 94.465 0 88.71V11.17C0 5.413 4.66.748 10.41.748h34.792c5.75 0 10.411 4.665 10.411 10.42V88.71c0 5.755-4.66 10.42-10.41 10.42"
            mask="url(#b)"
          />
        </g>
        <path
          fill="#FFF"
          d="M33.15 90.132a5.353 5.353 0 0 1-5.349 5.355 5.352 5.352 0 0 1-5.35-5.355 5.353 5.353 0 0 1 5.35-5.356 5.353 5.353 0 0 1 5.35 5.356"
        />
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <path
          fill="#FFF"
          d="M6 81.464h44.163V12H6zM32.939 9.364H22.663a2.115 2.115 0 0 1-2.114-2.116V6.31c0-1.168.947-2.115 2.114-2.115h10.276c1.167 0 2.114.947 2.114 2.115v.938a2.114 2.114 0 0 1-2.114 2.116"
          mask="url(#d)"
        />
        <path
          fill="#E96767"
          d="M28.165 41.443L35.608 34l3.722 3.722-7.444 7.443 7.444 7.443-3.722 3.722-7.443-7.444-7.443 7.444L17 52.608l7.443-7.443L17 37.722 20.722 34l7.443 7.443z"
          mask="url(#d)"
        />
      </g>
    </svg>
  );
}

export default SmartphoneError;
