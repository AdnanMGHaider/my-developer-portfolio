import ArrowLeft from "../../../../Assets/SVG/Icons/ArrowLeft";
import ArrowRight from "../../../../Assets/SVG/Icons/ArrowRight";
import ProjectsCarousel from "./ProjectsCarousel/ProjectsCarousel";

const SmallScreenProjectsSection = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-x-2 mb-2">
        <ArrowLeft className="w-8 fill-text-grey" />
        <p className="text-xsm-font text-text-grey">Swipe to view more</p>
        <ArrowRight className="w-8 fill-text-grey" />
      </div>
      <ProjectsCarousel />
    </>
  );
};

export default SmallScreenProjectsSection;
