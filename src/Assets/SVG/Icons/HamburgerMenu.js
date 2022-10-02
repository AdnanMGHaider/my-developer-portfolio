import React from "react";

const HamburgerMenu = (props) => {
  return (
    <svg
      onClick={props.onClick}
      className={`${props.className} w-full h-full`}
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1260 999.978"
    >
      <g id="Layer_1-2">
        <g>
          <rect
            x="0"
            y="0"
            width="1260"
            height="165.64"
            rx="82.82"
            ry="82.82"
          />
          <rect
            x="504"
            y="834.337"
            width="756"
            height="165.64"
            rx="82.82"
            ry="82.82"
          />
          <rect
            x="252"
            y="417.169"
            width="1008"
            height="165.64"
            rx="82.82"
            ry="82.82"
          />
        </g>
      </g>
    </svg>
  );
};

export default HamburgerMenu;
