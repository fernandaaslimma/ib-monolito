import React from "react";

function Smartphone() {
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
          d="M5.72 81.637h44.164V12.172H5.72zM32.939 9.364H22.663a2.115 2.115 0 0 1-2.114-2.116V6.31c0-1.168.947-2.115 2.114-2.115h10.276c1.167 0 2.114.947 2.114 2.115v.938a2.114 2.114 0 0 1-2.114 2.116"
          mask="url(#d)"
        />
        <path
          fill="#E96767"
          d="M11.294 69.565h13.9c.48 0 .87.39.87.87v6.087c0 .48-.39.87-.87.87h-13.9a.87.87 0 0 1-.869-.87v-6.087c0-.48.39-.87.869-.87"
          mask="url(#d)"
        />
        <path
          fill="#2EBD8C"
          d="M30.407 69.565h13.9c.481 0 .87.39.87.87v6.087c0 .48-.389.87-.87.87h-13.9a.87.87 0 0 1-.869-.87v-6.087c0-.48.39-.87.87-.87"
          mask="url(#d)"
        />
        <path
          fill="#D3DDE4"
          d="M10.425 19.094h34.751V16.63h-34.75zM10.425 29.963h34.751V27.5h-34.75zM10.425 35.398h25.017v-2.463H10.425zM10.425 24.529h25.017v-2.464H10.425z"
          mask="url(#d)"
        />
      </g>
    </svg>
  );
}

export default Smartphone;
