import React from "react";

function MfaChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="prefix__a"
          d="M15.849 7.347l-4.819 4.645 4.82 4.647c.174.168.261.39.261.612 0 .222-.086.446-.259.622-.174.168-.405.252-.636.252-.232 0-.463-.084-.635-.25L9.136 12.61c-.174-.168-.261-.389-.261-.612 0-.222.086-.447.26-.622l5.462-5.251c.172-.166.403-.25.634-.25.232 0 .463.084.635.25.175.17.262.393.259.616-.003.219-.094.439-.276.606z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="rotate(-90 12 12)">
        <path d="M0 0H24V24H0z" transform="matrix(-1 0 0 1 24 0)" />
        <use
          fill="#7E919D"
          transform="matrix(0 -1 -1 0 24.5 24.5)"
          xlinkHref="#prefix__a"
        />
      </g>
    </svg>
  );
}

export default MfaChevronRight;
