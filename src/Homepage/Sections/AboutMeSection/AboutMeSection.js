import AboutMeHeadingSticker from "../../../Assets/Images/AboutMeHeadingSticker.png";
import Button from "../../../Components/Button";
import Download from "../../../Assets/SVG/Icons/Download";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section className="w-11/12 mx-auto pb-16 pt-16 xs:pb-20 xs:pt-20 md:pb-24 md:pt-24 xl:pb-28 xl:pt-28">
      <div className="w-52 2xs:w-56 sm:w-64 md:w-72 xl:w-80 3xl:w-96 h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 md:mb-16 xmd:mb-20 mx-auto">
        <img
          src={AboutMeHeadingSticker}
          className="w-full h-auto"
          alt="Section heading sticker"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-11/12 max-w-[40rem] mx-auto bg-aboutMeDescriptionSticker bg-center bg-cover p-4 2xs:p-6 xs:p-8 xmd:px-10 xl:p-12 rounded-md flex flex-col space-y-6"
      >
        <p className="text-base-font xs:text-lg-font xmd:text-xl-font text-primary-purple-variation-1 font-medium">
          My journey into web development and design began when the world had
          come to a standstill.
        </p>
        <p className="text-sm-font 2xs:text-base-font xmd:text-lg-font text-white xmd:pt-0.5">
          Yes you guessed it. When the entire world was on lockdown due to the
          COVID-19 pandemic, my journey into the world of programming had begun.
        </p>
        <p className="text-sm-font 2xs:text-base-font xmd:text-lg-font text-white xmd:pt-0.5">
          From the very first time I was able to write a rudimentary program
          that actually worked, I was hooked.
        </p>
        <p className="text-sm-font 2xs:text-base-font xmd:text-lg-font text-white xmd:pt-0.5">
          Since then, with every line of code I write, with every project I
          complete and with every challenge I face along the way, my passion for
          building beautiful, responsive and functional websites and
          applications only keeps growing.
        </p>
        <p className="text-sm-font 2xs:text-base-font xmd:text-lg-font text-white xmd:pt-0.5">
          And to be quite frank, I'm just getting started.
        </p>
      </motion.div>
      <Button
        className="mx-auto mt-8 xs:mt-10 md:mt-12 xmd:mt-14 2xl:mt-16"
        icon={<Download />}
      >
        Download CV
      </Button>
    </section>
  );
};

export default AboutMeSection;
