import ArrowLeft from "../../../../Assets/SVG/Icons/ArrowLeft";
import ArrowRight from "../../../../Assets/SVG/Icons/ArrowRight";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";
import { motion } from "framer-motion";

const SmallScreenProjectsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="flex justify-center items-center gap-x-2 mb-2">
        <ArrowLeft className="w-8 fill-text-grey" />
        <p className="text-xsm-font text-text-grey">Swipe to view more</p>
        <ArrowRight className="w-8 fill-text-grey" />
      </div>
      <ProjectsCarousel />
    </motion.div>
  );
};

export default SmallScreenProjectsSection;
