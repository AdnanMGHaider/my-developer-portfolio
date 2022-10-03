import MyImage from "../../../../Assets/Images/MyImage.png";
import Button from "../../../../Components/Button";
import ContactMe from "../../../../Assets/SVG/Icons/ContactMe";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const SmallScreenHeroSection = () => {
  // const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 50px, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 50px)`;
  // const visibleMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 50px)`;
  return (
    <div className="md:hidden w-11/12 mx-auto pt-4 pb-8 sm:pt-6 sm:pb-10">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className="text-sm-font text-center 2xs:text-base-font"
      >
        Hello and Welcome!
        <br />
        My name is
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className="font-display text-center text-primary-purple tracking-wide text-4xl 2xs:text-5xl sm:text-6xl"
      >
        Adnan Haider
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        // initial={{
        //   WebkitMaskImage: hiddenMask,
        //   maskImage: hiddenMask,
        // }}
        // animate={{
        //   WebkitMaskImage: visibleMask,
        //   maskImage: visibleMask,
        // }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        className="rounded-full overflow-hidden w-3/4 mx-auto max-w-[18rem] my-8 xs:my-10 sm:my-12"
      >
        <img src={MyImage} className="w-full h-full" alt="Me" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className="text-sm-font text-center 2xs:text-base-font"
      >
        I'm a
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className="font-display text-center text-primary-purple tracking-wide text-[1.375rem] 2xs:text-3xl sm:text-4xl sm:leading-[3rem]"
      >
        Front-End Developer
        <br />&<br />
        Web Designer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
        className="text-sm-font text-center my-8 2xs:text-base-font xs:my-10 sm:my-12"
      >
        I enjoy crafting aesthetically pleasing, responsive and functional
        Websites and Applications
      </motion.p>
      <Link to="contactMe" spy={true} smooth={true} duration={500}>
        <Button className="mx-auto" icon={<ContactMe />}>
          Get in touch
        </Button>
      </Link>
    </div>
  );
};

export default SmallScreenHeroSection;
