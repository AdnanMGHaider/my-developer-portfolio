import MySignature from "../../../Assets/SVG/MySignature";
import HamburgerMenu from "../../../Assets/SVG/Icons/HamburgerMenu";

const HeroSectionNavBar = () => {
  return (
    <nav className="w-11/12 mx-auto flex items-center justify-between py-2 md:py-3">
      <div className="h-12 w-auto md:h-14">
        <MySignature className="fill-text-white" />
      </div>
      <ul className="hidden md:flex space-x-6 xmd:space-x-12 ">
        <li className="text-base-font font-semibold">About Me</li>
        <li className="text-base-font font-semibold">Featured Projects</li>
        <li className="text-base-font font-semibold">Skills</li>
      </ul>
      <span className="h-8 w-auto md:hidden">
        <HamburgerMenu className="fill-text-white" />
      </span>
    </nav>
  );
};

export default HeroSectionNavBar;