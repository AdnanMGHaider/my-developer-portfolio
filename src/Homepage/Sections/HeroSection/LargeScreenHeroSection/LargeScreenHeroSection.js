import MyImgWithNameAndSticker from "../../../../Assets/Images/MyImgWithNameAndSticker.png";
import HeroSectionSubHeading from "../../../../Assets/Images/HeroSectionSubHeading.png";
import ContactMe from "../../../../Assets/SVG/Icons/ContactMe";
import Mail from "../../../../Assets/SVG/Icons/Mail";
import Github from "../../../../Assets/SVG/Icons/Github";
import Linkedin from "../../../../Assets/SVG/Icons/Linkedin";
import ArrowDown from "../../../../Assets/SVG/Icons/ArrowDown";
import Button from "../../../../Components/Button";
import Tippy from "@tippyjs/react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "tippy.js/dist/tippy.css";

const LargeScreenHeroSection = () => {
  const hiddenMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 50px, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 50px)`;
  const visibleMask = `repeating-linear-gradient(to left, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 50px)`;

  return (
    <div className="hidden md:block w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto py-8 md:pb-0 xmd:pt-10">
      <div className="grid grid-cols-2 gap-x-8 xmd:gap-x-12 lg:gap-x-16 2xl:gap-x-20">
        <motion.div
          initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
          animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={MyImgWithNameAndSticker}
            className="w-full h-full"
            alt="Adnan Haider"
          />
        </motion.div>

        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            className="w-full h-auto"
          >
            <img
              src={HeroSectionSubHeading}
              className="w-full h-full"
              alt="Sub-heading of the Hero section"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            className="whitespace-nowrap text-base-font xmd:text-lg-font 2xl:text-xl-font 3xl:text-2xl-font"
          >
            I enjoy crafting aesthetically pleasing,
            <br />
            responsive and functional Websites and
            <br />
            Applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            className="flex items-center justify-between"
          >
            <Link to="contactMe" spy={true} smooth={true} duration={500}>
              <Button icon={<ContactMe className="fill-text-black" />}>
                Get In Touch
              </Button>
            </Link>
            <div className="flex space-x-4 lg:space-x-6 3xl:space-x-8">
              <Tippy content="Send me an Email">
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstwNRSLDbGHvHKGqpDjJRBtspZBnvMxVzDxRWdxQlCXRTPCxsmWMdCZShVhPsXmwbXZsVng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </a>
              </Tippy>
              <Tippy content="Github">
                <a
                  href="https://github.com/AdnanMGHaider"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </a>
              </Tippy>
              <Tippy content="Linkedin">
                <a
                  href="https://www.linkedin.com/in/adnan-haider-58405a199/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-6 xmd:h-7 3xl:h-8 w-auto fill-accent-orange cursor-pointer" />
                </a>
              </Tippy>
            </div>
          </motion.div>
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
