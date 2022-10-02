import SkillsHeadingSticker from "../../../Assets/Images/SkillsHeadingSticker.png";
import SkillCard from "./SkillCard";
import SkillsData from "./SkillsData";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
        delayChildren: 0.4,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateX: -50, translateY: -50 },
    show: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: { ease: "easeOut" },
    },
  };

  return (
    <section className="mx-auto py-16 xs:py-20 md:py-24 xl:py-28">
      <div className="w-48 2xs:w-52 sm:w-60 md:w-64 xl:w-72 3xl:w-80 h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 md:mb-20 xl:mb-24 mx-auto">
        <img
          src={SkillsHeadingSticker}
          className="w-full h-auto"
          alt="Section heading sticker"
        />
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-11/12 mx-auto">
          <h3 className="text-center text-base-font xs:text-lg-font xmd:text-xl-font font-medium text-primary-purple-variation-1 mb-6 2xs:mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
            Shown below are the main tools and technologies I currently use and
            work with on a regular basis
          </h3>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 rounded-md gap-y-6 xs:gap-y-8 sm:gap-y-12 px-4 lg:px-8 gap-x-6"
          >
            {SkillsData.map((skill) => (
              <SkillCard
                variants={item}
                id={skill.id}
                key={skill.id}
                skillName={skill.skillName}
                skillSVG={skill.skillSVGSrc}
              />
            ))}
          </motion.ul>
          <p className="md:hidden text-center text-xsm-font xmd:text-sm-font text-text-grey mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
            Please note that the list of technologies shown above isn't
            exhaustive.
          </p>
          <p className="hidden md:block text-center text-xsm-font xmd:text-sm-font text-text-grey mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
            Please note that the list of technologies and tools listed above
            isn't exhaustive as some supporting technologies have been omitted
            for the purpose of keeping the list short and focused
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
