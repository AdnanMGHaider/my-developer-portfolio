import MySignature from "../../../Assets/SVG/MySignature";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSectionNavBar = ({ toggle }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        // delay: 0.6,
      }}
      className="w-11/12 relative z-[8999] mx-auto flex items-center justify-between py-4 3xl:py-8"
    >
      <div className="h-11 w-auto md:h-14 3xl:h-16">
        <MySignature className="fill-text-white" />
      </div>
      <ul className="hidden md:flex space-x-6 xmd:space-x-12 ">
        <Link to="aboutMe" spy={true} smooth={true} duration={500}>
          <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
            About Me
          </li>
        </Link>
        <Link to="featuredProjects" spy={true} smooth={true} duration={500}>
          <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
            Featured Projects
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
            Skills
          </li>
        </Link>
      </ul>
      <span className="h-6 w-auto md:hidden">
        <HamburgerMenu
          onClick={toggle}
          className="fill-text-white cursor-pointer"
        />
      </span>
    </motion.nav>
  );
};

export default HeroSectionNavBar;
