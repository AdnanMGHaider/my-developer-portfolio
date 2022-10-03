import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${props.className} w-44 2xs:w-48 xmd:w-52 3xl:w-60 flex rounded-md outline outline-2 outline-accent-orange outline-offset-[-2px] items-center hover:bg-accent-orange duration-300 ease-in hover:ease-out group`}
    >
      <span className="p-[5%] bg-accent-orange flex justify-items-center items-center w-1/4 h-11 sm:h-12 lg:h-14 justify-center rounded-l-md">
        {props.icon}
      </span>
      <div className="w-3/4 font-semibold text-xsm-font 2xs:text-sm-font 3xl:text-base-font ease-in duration-300 group-hover:text-text-black group-hover:ease-out">
        {props.children}
      </div>
    </button>
  );
};

export default Button;
