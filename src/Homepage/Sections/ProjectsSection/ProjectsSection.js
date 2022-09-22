import ProjectsHeadingSticker from "../../../Assets/Images/ProjectsHeadingSticker.png";
import SmallScreenProjectsSection from "./SmallScreenProjectsSection/SmallScreenProjectsSection";
import LargeScreenProjectsSection from "./LargeScreenProjectsSection/LargeScreenProjectsSection";

const ProjectsSection = () => {
  return (
    <section className="py-12 xs:py-14 md:py-16 xl:py-20 mx-auto">
      <div className="w-56 2xs:w-60 sm:w-72 md:w-80 xl:w-96 3xl:w-[26rem] h-auto mb-8 2xs:mb-10 xs:mb-12 sm:mb-14 md:mb-16 xl:mb-20 mx-auto">
        <img
          src={ProjectsHeadingSticker}
          className="w-full h-auto"
          alt="Section heading sticker"
        />
      </div>
      <div className="md:hidden w-11/12 mx-auto">
        <div className="w-11/12 mx-auto">
          <h3 className="text-center text-base-font xs:text-lg-font xmd:text-xl-font font-medium text-primary-purple-variation-1 mb-6 2xs:mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
            I'm constantly learning and building things using various
            technologies. Some of them are featured below.
          </h3>
          <SmallScreenProjectsSection />
        </div>
      </div>
      <LargeScreenProjectsSection />
    </section>
  );
};

export default ProjectsSection;
