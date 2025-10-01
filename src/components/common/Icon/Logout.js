import React from "react";
import { blue10 } from "../../../styles/settings";

function Logout({ height = "20", width = "20", iconColor = blue10 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
    >
      <path
        fill={iconColor}
        fillRule="nonzero"
        stroke={iconColor}
        strokeWidth=".2"
        d="M18.543 11.496l-3.69 3.645c-.59.588-1.474-.295-.884-.882l2.463-2.457c.121-.12.08-.219-.093-.219H9.542a.625.625 0 1 1 0-1.247h6.797c.172 0 .214-.098.093-.22L13.97 7.662c-.59-.589.294-1.47.883-.882l3.687 3.62c.31.304.31.795.004 1.097zM5.79 16.585h2.189a.625.625 0 0 1 0 1.25H5.164a.938.938 0 0 1-.936-.94V5.024c0-.517.42-.94.936-.94h2.814a.625.625 0 1 1 0 1.25H5.789c-.17 0-.311.14-.311.312v10.625c0 .17.14.313.311.313z"
      />
    </svg>
  );
}

export default Logout;
