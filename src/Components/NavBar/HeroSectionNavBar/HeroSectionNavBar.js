import MySignature from "../../../Assets/SVG/MySignature";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";
import { motion } from "framer-motion";

const HeroSectionNavBar = () => {
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
        <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:rotate-3 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
          About Me
        </li>
        <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:rotate-3 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
          Featured Projects
        </li>
        <li className="text-base-font 3xl:text-lg-font font-semibold duration-200 ease-in hover:scale-110 hover:rotate-3 hover:ease-out hover:duration-200 hover:text-primary-purple-variation-1 cursor-pointer">
          Skills
        </li>
      </ul>
      <span className="h-6 w-auto md:hidden">
        <HamburgerMenu className="fill-text-white" />
      </span>
    </motion.nav>
  );
};

export default HeroSectionNavBar;
