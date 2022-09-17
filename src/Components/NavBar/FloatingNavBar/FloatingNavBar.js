import { useState } from "react";

import MySignature from "../../../Assets/SVG/MySignature";
import Github from "../../../Assets/SVG/Icons/Github";
import Linkedin from "../../../Assets/SVG/Icons/Linkedin";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";
import Mail from "../../../Assets/SVG/Icons/Mail";

const FloatingNavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const fadeInNavbar = () => {
    if (window.scrollY >= 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  window.addEventListener("scroll", fadeInNavbar);

  return (
    <nav
      className={`${
        showNavbar
          ? "opacity-100 top-2 duration-500 ease-out"
          : "opacity-0 -top-full duration-300 ease-in"
      } fixed max-w-screen-3xl left-[50%] -translate-x-1/2 flex items-center w-11/12 bg-primary-purple py-2 justify-between md:justify-around md:py-3 rounded-xl px-4 md:px-0`}
    >
      <div className="h-12 w-auto md:h-14">
        <MySignature className="fill-text-black" />
      </div>
      <ul className="hidden md:flex space-x-6 xmd:space-x-12">
        <li className="text-base-font font-semibold text-black">About Me</li>
        <li className="text-base-font font-semibold text-black">
          Featured Projects
        </li>
        <li className="text-base-font font-semibold text-black">Skills</li>
      </ul>
      <ul className="hidden md:flex space-x-4 xmd:space-x-6">
        <li className="h-6 w-auto">
          <Mail className="fill-text-black" />
        </li>
        <li className="h-6 w-auto">
          <Github className="fill-text-black" />
        </li>
        <li className="h-6 w-auto">
          <Linkedin className="fill-text-black" />
        </li>
      </ul>
      <span className="h-8 w-auto md:hidden">
        <HamburgerMenu className="fill-text-black" />
      </span>
    </nav>
  );
};

export default FloatingNavBar;
