import ProjectsHeadingSticker from "../../../Assets/Images/ProjectsHeadingSticker.png";
import SmallScreenProjectsSection from "./SmallScreenProjectsSection/SmallScreenProjectsSection";

const ProjectsSection = () => {
  return (
    <section className="py-12 xs:py-14 md:py-16 xl:py-20 mx-auto">
      <div className="w-56 2xs:w-60 sm:w-64 md:w-72 xl:w-80 3xl:w-96 h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 xl:mb-16 mx-auto">
        <img
          src={ProjectsHeadingSticker}
          className="w-full h-auto"
          alt="Section heading sticker"
        />
      </div>
      <div className="w-11/12 mx-auto">
        <div className="w-11/12 mx-auto">
          <h3 className="text-center text-base-font font-medium text-primary-purple-variation-1 mb-8">
            I'm constantly learning and building things using various
            technologies. Some of them are featured below.
          </h3>
          <SmallScreenProjectsSection />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
