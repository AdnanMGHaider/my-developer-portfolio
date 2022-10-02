import SquarePatternLeftAlignedDesign from "../../../../Assets/SVG/SquarePatternLeftAlignedDesign";
import LaptopAndMobileLeftAligned from "../../../../Assets/Images/LaptopAndMobileLeftAligned.png";
import Button from "../../../../Components/Button";
import Github from "../../../../Assets/SVG/Icons/Github";
import ExternalLink from "../../../../Assets/SVG/Icons/ExternalLink";
import { motion } from "framer-motion";

const LeftAlignedProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-x-hidden"
    >
      <SquarePatternLeftAlignedDesign className="opacity-50 absolute -left-[15%] xmd:-left-[10%] xl:left-0" />
      <div className="w-11/12 mx-auto">
        <div className="w-11/12 mx-auto flex relative gap-x-8 py-8 lg:gap-x-12 xl:gap-x-16">
          <div className="w-[40%] lg:w-[50%] h-auto flex flex-col self-center">
            <img
              className="w-full h-auto"
              src={LaptopAndMobileLeftAligned}
              alt="Laptop and Mobile website screenshots"
            />
          </div>
          <div className="w-[60%] lg:w-[50%] h-auto flex flex-col gap-y-6 lg:gap-y-8 xl:gap-y-10 2xl:gap-y-12">
            <div className="flex items-center isolate">
              <h2 className="font-display text-accent-orange text-4xl 2xl:text-5xl tracking-wide relative z-20">
                KookBook
              </h2>
              <h2 className="font-display text-7xl 2xl:text-8xl tracking-wide opacity-10 relative right-[1.25rem] z-10">
                02
              </h2>
            </div>
            <p className="text-base-font xmd:text-lg-font">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi
            </p>
            <p className="text-sm-font xmd:text-base-font text-text-grey">
              React NodeJS TailwindCSS MongoDB ExpressJS
            </p>
            <div className="flex gap-x-6 xl:gap-x-8">
              <Button icon={<ExternalLink />}>Live site</Button>
              <Button icon={<Github />}>View code</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftAlignedProject;
