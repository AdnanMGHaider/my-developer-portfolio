import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.className} w-48 xmd:w-52 3xl:w-60  flex rounded-md outline outline-2 outline-accent-orange outline-offset-[-2px] items-center`}
    >
      <span className="p-[5%] bg-accent-orange flex justify-items-center items-center w-1/4 h-full justify-center rounded-l-md">
        {props.icon}
      </span>
      <div className="w-3/4 font-semibold text-sm-font 3xl:text-base-font">
        {props.children}
      </div>
    </button>
  );
};

export default Button;
