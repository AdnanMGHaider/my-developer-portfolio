import { useState } from "react";

import MySignature from "../../../Assets/SVG/MySignature";
import Github from "../../../Assets/SVG/Icons/Github";
import Linkedin from "../../../Assets/SVG/Icons/Linkedin";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";
import Mail from "../../../Assets/SVG/Icons/Mail";
import CV from "../../../Assets/SVG/Icons/CV";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FloatingNavBar = ({ toggle, mobileNavBarIsOpen }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const fadeInNavbar = () => {
    if (window.scrollY >= 150) {
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
          ? "opacity-100 top-2 duration-1000 delay-300 ease-out"
          : "opacity-0 -top-full duration-1000 delay-300 ease-in"
      } fixed left-[50%] -translate-x-1/2 flex z-[9000] items-center w-11/12 max-w-[90rem] bg-primary-purple py-2 justify-between md:justify-around md:py-3 3xl:py-5 rounded-md px-4 md:px-0`}
    >
      <Tippy content="Back to top">
        <div className="h-11 w-auto md:h-14 3xl:h-16">
          <MySignature className="fill-text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:fill-text-white" />
        </div>
      </Tippy>
      <ul className="hidden md:flex space-x-6 xmd:space-x-12">
        <li className="text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white hover:rotate-3">
          About Me
        </li>
        <li className="text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white hover:rotate-3">
          Featured Projects
        </li>
        <li className="text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white hover:rotate-3">
          Skills
        </li>
      </ul>
      <ul className="hidden md:flex space-x-4 xmd:space-x-6 3xl:space-x-8">
        <Tippy content="Send me an Email">
          <li className="h-6 w-auto 3xl:h-7 cursor-pointer">
            <Mail data-tip="hello" className="fill-text-black cursor-pointer" />
          </li>
        </Tippy>
        <Tippy content="Github">
          <li className="h-6 w-auto 3xl:h-7 cursor-pointer">
            <Github className="fill-text-black cursor-pointer" />
          </li>
        </Tippy>
        <Tippy content="Linkedin">
          <li className="h-6 w-auto 3xl:h-7 cursor-pointer">
            <Linkedin className="fill-text-black cursor-pointer" />
          </li>
        </Tippy>
        <Tippy content="Download my CV">
          <li className="h-6 w-auto 3xl:h-7 cursor-pointer">
            <CV className="fill-text-black cursor-pointer" />
          </li>
        </Tippy>
      </ul>
      <span className="h-6 w-auto md:hidden">
        <HamburgerMenu onClick={toggle} className="fill-text-black" />
      </span>
    </nav>
  );
};

export default FloatingNavBar;
