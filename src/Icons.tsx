import React, { useState } from "react";

const MicOnIcon = (props: any) => (
  <svg
    fill="#1B357C"
    height="24px"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    enableBackground="new 0 0 512 512"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <path d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z" />
          <path d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z" />
        </g>
      </g>
    </g>
  </svg>
);
const MicOffIcon = (props: any) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="#1B357C"
    stroke="#1B357C"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"ionicons-v5-g"}</title>
      <line
        x1={432}
        y1={400}
        x2={96}
        y2={64}
        style={{
          fill: "none",
          stroke: "#000000",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path d="M400,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,208v32a111.68,111.68,0,0,1-2.68,24.38,2,2,0,0,0,.53,1.84l22.59,22.59a2,2,0,0,0,3.29-.72A143.27,143.27,0,0,0,400,240Z" />
      <path d="M256,352A112.36,112.36,0,0,1,144,240V208.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,208v32c0,74,56.1,135.12,128,143.11V432H192.45c-8.61,0-16,6.62-16.43,15.23A16,16,0,0,0,192,464H319.55c8.61,0,16-6.62,16.43-15.23A16,16,0,0,0,320,432H272V383.11a143.08,143.08,0,0,0,52-16.22,4,4,0,0,0,.91-6.35l-18.4-18.39a3,3,0,0,0-3.41-.58A111,111,0,0,1,256,352Z" />
      <path d="M257.14,48a79.66,79.66,0,0,0-68.47,36.57,4,4,0,0,0,.54,5L332.59,233a2,2,0,0,0,3.41-1.42V128.91C336,85,301,48.6,257.14,48Z" />
      <path d="M179.41,215a2,2,0,0,0-3.41,1.42V239a80.89,80.89,0,0,0,23.45,56.9,78.55,78.55,0,0,0,77.8,21.19,2,2,0,0,0,.86-3.35Z" />
    </g>
  </svg>
);

export { MicOnIcon, MicOffIcon };
