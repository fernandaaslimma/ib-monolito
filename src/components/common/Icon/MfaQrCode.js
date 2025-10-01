import React from "react";

function MfaQrCode() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      width="217"
      height="161"
      viewBox="0 0 217 161"
    >
      <defs>
        <filter
          id="prefix__a"
          width="119%"
          height="1138.2%"
          x="-9.5%"
          y="-421.6%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius=".84"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy="1"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feMorphology in="SourceAlpha" radius="1" result="shadowInner" />
          <feOffset dy="1" in="shadowInner" result="shadowInner" />
          <feComposite
            in="shadowOffsetOuter1"
            in2="shadowInner"
            operator="out"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="1.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.702000762 0 0 0 0 0.849748283 0 0 0 0 1 0 0 0 1 0"
          />
        </filter>
        <filter
          id="prefix__c"
          width="117.4%"
          height="1040.7%"
          x="-8.7%"
          y="-372.9%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur
            in="SourceAlpha"
            result="shadowBlurInner1"
            stdDeviation="1"
          />
          <feOffset dy="1" in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
        <path id="prefix__b" d="M.534 28.22h61.452" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M5.89 5.811H211.10899999999998V158.227H5.89z" />
        <path
          fill="#003B77"
          fillRule="nonzero"
          d="M215.018 0C216.113 0 217 .868 217 1.94V90h-2.973V2.91H2.973v155.18H80V161H1.982C.887 161 0 160.132 0 159.06V1.94C0 .868.887 0 1.982 0h213.036z"
        />
        <g>
          <path
            fill="#003B77"
            fillRule="nonzero"
            d="M156.012 56.154l-2.838 2.976 12.908 11.35c3.038 2.682 4.77 6.46 4.772 10.42v49.422h4.21V80.9c-.006-5.093-2.233-9.95-6.142-13.396l-12.91-11.35z"
            transform="translate(29.2 30.595)"
          />
          <g>
            <path
              fill="#003B77"
              fillRule="nonzero"
              d="M139.248 9.189H84.524C78.714 9.196 74.007 13.71 74 19.283v100.945c.007 5.572 4.715 10.087 10.524 10.094h52.62v-3.612c-.01-9.094 2.796-17.99 8.065-25.55.558-.802.446-1.869-.263-2.549L130.212 84.48c-1.361-1.308-2.083-3.106-1.988-4.952.096-1.847 1-3.567 2.49-4.739 2.868-2.103 6.924-1.802 9.423.696l20.776 19.93 2.976-2.855-14.117-13.545v-59.73c-.007-5.573-4.714-10.088-10.524-10.095zm6.315 65.787l-2.45-2.35c-4.038-3.957-10.533-4.37-15.079-.956-2.405 1.896-3.864 4.679-4.016 7.662-.151 2.983 1.017 5.889 3.218 8.002l13.534 12.982c-5.047 7.801-7.754 16.787-7.821 25.968H84.524c-3.487 0-6.314-2.712-6.314-6.056v-6.057h52.62v-4.038H78.21V25.34h67.353v49.636zm0-53.674H78.21v-2.019c0-3.344 2.827-6.057 6.314-6.057h54.724c3.487 0 6.315 2.713 6.315 6.057v2.019z"
              transform="translate(29.2 30.595) translate(.034)"
            />
            <path
              fill="#000"
              fillRule="nonzero"
              d="M102.388 68.883v16.151H85.55v-16.15h16.838zm13.471 0v9.69l1.903.001c-.188 1.006-.286 2.043-.286 3.1v.13h-1.617v3.23h-10.103v-3.23h6.735v-9.69h-6.735v-3.23h10.103zm-16.838 3.23H88.918v9.691H99.02v-9.69zm-3.368 3.23v3.23h-3.368v-3.23h3.368zm13.47 0v3.23h-3.367v-3.23h3.368zm13.471-6.46v.66c-1.37 1.358-2.513 2.928-3.368 4.655v-5.315h3.368zm6.736-6.46v2.895c-1.187.422-2.314.96-3.368 1.6v-1.265h-3.368v-3.23h6.736zm-40.412-9.69v6.46h3.367v3.23h-3.367v3.23H85.55v-12.92h3.368zm13.47 0v6.46h6.736v3.23h3.367v3.23h-6.735v-3.23h-6.735v3.23h-3.368v-6.46h3.368v-6.46h3.367zm16.839 6.46v6.46h-3.368v-6.46h3.368zm20.206 3.23v2.184c-1.217-.246-2.479-.375-3.772-.375-1.01 0-1.999.078-2.963.23v-2.04h6.735zm-10.103-9.69v3.23h3.367v-3.23h6.736v3.23h-3.368v3.23h-13.47v-3.23h3.367v-3.23h3.368zm-10.103-3.231v6.46h-13.47v-3.23h10.102v-3.23h3.368zm-23.574 3.23v3.23h-3.368v-3.23h3.368zm6.735-19.381V49.5H85.55v-16.15h16.838zm37.045 0V49.5h-16.839v-16.15h16.839zm-30.31 12.92v3.23h-3.367v-3.23h3.368zm-10.102-9.69H88.918v9.69H99.02v-9.69zm37.044 0h-10.103v9.69h10.103v-9.69zm-26.941 0v3.23h10.103v3.23h-3.368v3.23h-3.368v-3.23h-6.735v-6.46h3.368zm-13.47 3.23v3.23h-3.369v-3.23h3.368zm37.043 0v3.23h-3.367v-3.23h3.367zm-13.47-6.46v3.23h-6.736v-3.23h6.736z"
              transform="translate(29.2 30.595) translate(.034)"
            />
            <g>
              <g fill="#000" fillRule="nonzero">
                <path
                  d="M12.825 0H0v12.314h12.825V0zM10.26 9.851H2.565V2.463h7.695V9.85z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
                <path
                  d="M4.809 4.618H7.481V7.183H4.809zM26.718 0v12.314h12.825V0H26.718zm10.26 9.851h-7.695V2.463h7.695V9.85z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
                <path
                  d="M32.062 4.618H34.733999999999995V7.183H32.062zM0 37.969h12.825V25.655H0v12.314zm2.565-9.852h7.695v7.389H2.565v-7.389z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
                <path
                  d="M4.809 30.786H7.481V33.351H4.809zM19.771 0H24.580000000000002V2.565H19.771zM20.039 9.236L22.577 9.236 22.577 6.841 25.115 6.841 25.115 4.447 17.5 4.447 17.5 2.052 14.962 2.052 14.962 4.447 14.962 5.644 14.962 6.841 20.039 6.841zM14.962 9.749H17.634V12.314H14.962zM25.115 11.801L22.577 11.801 22.577 14.11 14.962 14.11 14.962 16.419 25.115 16.419zM2.405 21.165L4.809 21.165 4.809 18.728 2.405 18.728 2.405 13.854 0 13.854 0 23.602 2.405 23.602zM4.809 14.367H7.481V16.932000000000002H4.809zM14.642 23.602L19.771 23.602 19.771 21.165 17.206 21.165 17.206 18.728 12.077 18.728 12.077 13.854 9.512 13.854 9.512 18.728 6.947 18.728 6.947 23.602 9.512 23.602 9.512 21.165 10.794 21.165 12.077 21.165 14.642 21.165zM21.909 18.984H24.581V23.602000000000004H21.909zM22.657 25.655L14.962 25.655 14.962 28.117 20.092 28.117 20.092 35.506 14.962 35.506 14.962 37.969 22.657 37.969 22.657 35.506 27.787 35.506 27.787 33.043 22.657 33.043z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
                <path
                  d="M14.962 30.786H17.634V33.351H14.962zM24.581 26.168H27.253V30.786H24.581zM37.405 30.786L29.924 30.786 29.924 37.969 32.418 37.969 32.418 33.18 37.405 33.18z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
                <path
                  d="M34.734 35.403H39.543V37.967999999999996H34.734zM36.871 25.655H39.543V28.220000000000002H36.871zM29.657 28.22L32.062 28.22 32.062 21.037 27.252 21.037 27.252 23.431 29.657 23.431zM34.413 16.676L31.848 16.676 31.848 14.367 29.283 14.367 29.283 16.676 26.718 16.676 26.718 18.984 36.978 18.984 36.978 16.676 39.543 16.676 39.543 14.367 34.413 14.367zM34.734 21.037H39.543V23.602H34.734z"
                  transform="translate(29.2 30.595) translate(.034) translate(.743 .007) translate(11.756 7.183)"
                />
              </g>
              <path
                fill="#FFF"
                d="M11.222 28.22H51.299V47.718H11.222z"
                opacity=".829"
                transform="translate(29.2 30.595) translate(.034) translate(.743 .007)"
              />
              <path
                fill="#003B77"
                fillRule="nonzero"
                d="M7.481 52.335v-1.539H1.603v-5.644H0v7.183h7.481zM7.481 0v1.539H1.603v5.644H0V0h7.481zM56.108 52.335v-1.539h5.878v-5.644h1.603v7.183h-7.481zM55.574 0v1.539h5.878v5.644h1.603V0h-7.481z"
                opacity=".118"
                transform="translate(29.2 30.595) translate(.034) translate(.743 .007)"
              />
              <g
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(29.2 30.595) translate(.034) translate(.743 .007)"
              >
                <use fill="#000" filter="url(#prefix__a)" href="#prefix__b" />
                <use fill="#000" filter="url(#prefix__c)" href="#prefix__b" />
                <use stroke="#003B77" strokeWidth="1.68" href="#prefix__b" />
              </g>
            </g>
          </g>
          <path
            fill="#003B77"
            fillRule="nonzero"
            d="M109.815 118.209L114.025 118.209 114.025 122.246 109.815 122.246z"
            transform="translate(29.2 30.595)"
          />
        </g>
      </g>
    </svg>
  );
}

export default MfaQrCode;
