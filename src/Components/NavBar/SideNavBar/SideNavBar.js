import CloseIcon from "../../../Assets/SVG/Icons/CloseIcon";
import { motion } from "framer-motion";

const SideNavBar = ({ toggle, mobileNavBarIsOpen }) => {
  return (
    <motion.aside
      className={`flex flex-col justify-evenly fixed top-0 h-screen w-[95%] xs:w-[90%] sm:w-[70%] rounded-l-3xl bg-primary-purple z-[10000] ${
        mobileNavBarIsOpen
          ? "right-0 opacity-100 duration-700 ease-out"
          : "-right-[100%] opacity-0 duration-500 ease-in"
      }`}
    >
      <span className="flex h-7 w-7 absolute top-[1rem] right-[1rem]">
        <CloseIcon onClick={toggle} className="cursor-pointer" />
      </span>
      <ul className="h-fit flex flex-col gap-y-4">
        <li className="cursor-pointer text-lg-font text-text-black font-medium text-center">
          About Me
        </li>
        <li className="cursor-pointer text-lg-font text-text-black font-medium text-center">
          Featured Projects
        </li>
        <li className="cursor-pointer text-lg-font text-text-black font-medium text-center">
          Skills
        </li>
      </ul>
      <hr className="w-[30%] flex self-center border-text-black" />
      <ul className="h-fit flex flex-col gap-y-4">
        <li className="cursor-pointer text-lg-font text-text-black text-center">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwNRSLDbGHvHKGqpDjJRBtspZBnvMxVzDxRWdxQlCXRTPCxsmWMdCZShVhPsXmwbXZsVng"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
        <li className="cursor-pointer text-lg-font text-text-black text-center">
          <a
            href="https://github.com/AdnanMGHaider"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="cursor-pointer text-lg-font text-text-black text-center">
          <a
            href="https://www.linkedin.com/in/adnan-haider-58405a199/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="cursor-pointer text-lg-font text-text-black text-center">
          Download CV
        </li>
      </ul>
    </motion.aside>
  );
};

export default SideNavBar;
