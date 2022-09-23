import MyImgWithNameAndSticker from "../../../../Assets/Images/MyImgWithNameAndSticker.png";
import HeroSectionSubHeading from "../../../../Assets/Images/HeroSectionSubHeading.png";
import ContactMe from "../../../../Assets/SVG/Icons/ContactMe";
import Mail from "../../../../Assets/SVG/Icons/Mail";
import Github from "../../../../Assets/SVG/Icons/Github";
import Linkedin from "../../../../Assets/SVG/Icons/Linkedin";
import ArrowDown from "../../../../Assets/SVG/Icons/ArrowDown";
import Button from "../../../../Components/Button";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const LargeScreenHeroSection = () => {
  return (
    <div className="hidden md:block w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto py-8 md:pb-0 xmd:pt-10">
      <div className="grid grid-cols-2 gap-x-8 xmd:gap-x-12 lg:gap-x-16 2xl:gap-x-20">
        <div>
          <img
            src={MyImgWithNameAndSticker}
            className="w-full h-full"
            alt="Adnan Haider"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-full h-auto">
            <img
              src={HeroSectionSubHeading}
              className="w-full h-full"
              alt="Sub-heading of the Hero section"
            />
          </div>
          <p className="whitespace-nowrap text-base-font xmd:text-lg-font 2xl:text-xl-font 3xl:text-2xl-font">
            I enjoy crafting aesthetically pleasing,
            <br />
            responsive and functional Websites and
            <br />
            Applications
          </p>
          <div className="flex items-center justify-between">
            <Button icon={<ContactMe className="fill-text-black" />}>
              Get In Touch
            </Button>
            <div className="flex space-x-4 lg:space-x-6 3xl:space-x-8">
              <Tippy content="Send me an Email">
                <span>
                  <Mail className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </span>
              </Tippy>
              <Tippy content="Github">
                <span>
                  <Github className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </span>
              </Tippy>
              <Tippy content="Linkedin">
                <span>
                  <Linkedin className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </span>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center space-x-2 mt-8 xmd:mt-10 lg:mt-12 2xl:mt-14 3xl:mt-16">
        <span className="text-sm-font">Scroll Down</span>
        <span className="w-4 h-auto">
          <ArrowDown className="fill-primary-purple" />
        </span>
      </div>
    </div>
  );
};

export default LargeScreenHeroSection;
