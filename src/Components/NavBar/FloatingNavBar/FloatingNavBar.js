import { useState } from "react";

import MySignature from "../../../Assets/SVG/MySignature";
import Github from "../../../Assets/SVG/Icons/Github";
import Linkedin from "../../../Assets/SVG/Icons/Linkedin";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";
import Mail from "../../../Assets/SVG/Icons/Mail";
import CV from "../../../Assets/SVG/Icons/CV";
import Tippy from "@tippyjs/react";
import { Link } from "react-scroll";
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
      } fixed left-[50%] -translate-x-1/2 flex z-[9000] items-center w-11/12 max-w-[90rem] bg-primary-purple py-2 justify-between md:justify-around md:py-3 lg:py-4 rounded-md px-4 md:px-0`}
    >
      <Link to="topOfPage" spy={true} smooth={true} duration={500}>
        <Tippy content="Back to top">
          <div className="h-11 w-auto xmd:h-12 2xl:h-14 3xl:h-16">
            <MySignature className="fill-text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:fill-text-white" />
          </div>
        </Tippy>
      </Link>
      <ul className="hidden md:flex space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12">
        <Link to="aboutMe" spy={true} smooth={true} duration={500}>
          <li className="text-sm-font xmd:text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white">
            About Me
          </li>
        </Link>
        <Link to="featuredProjects" spy={true} smooth={true} duration={500}>
          <li className="text-sm-font xmd:text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white">
            Projects
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <li className="text-sm-font xmd:text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white">
            Skills
          </li>
        </Link>
        <Link to="contactMe" spy={true} smooth={true} duration={500}>
          <li className="text-sm-font xmd:text-base-font 3xl:text-lg-font font-semibold text-black duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 cursor-pointer hover:text-text-white">
            Message
          </li>
        </Link>
      </ul>
      <ul className="hidden md:flex space-x-4 lg:space-x-5 3xl:space-x-6">
        <Tippy content="Send me an Email">
          <li className="h-5 3xl:h-6 w-auto cursor-pointer">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwNRSLDbGHvHKGqpDjJRBtspZBnvMxVzDxRWdxQlCXRTPCxsmWMdCZShVhPsXmwbXZsVng"
              target="_blank"
              rel="noreferrer"
            >
              <Mail
                data-tip="hello"
                className="fill-text-black cursor-pointer"
              />
            </a>
          </li>
        </Tippy>
        <Tippy content="Github">
          <li className="h-5 3xl:h-6 w-auto cursor-pointer">
            <a
              href="https://github.com/AdnanMGHaider"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="fill-text-black cursor-pointer" />
            </a>
          </li>
        </Tippy>
        <Tippy content="Linkedin">
          <li className="h-5 3xl:h-6 w-auto cursor-pointer">
            <a
              href="https://www.linkedin.com/in/adnan-haider-58405a199/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="fill-text-black cursor-pointer" />
            </a>
          </li>
        </Tippy>
        <Tippy content="Download my CV">
          <li className="h-5 3xl:h-6 w-auto cursor-pointer">
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
