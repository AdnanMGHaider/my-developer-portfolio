import RightAlignedProject from "./RightAlignedProject";
import LeftAlignedProject from "./LeftAlignedProject";

const LargeScreenProjectsSection = () => {
  return (
    <div className="hidden md:block mx-auto">
      <div className="w-11/12 mx-auto">
        <div className="w-11/12 mx-auto">
          <h3 className="text-center text-base-font xs:text-lg-font xmd:text-xl-font font-medium text-primary-purple-variation-1 md:mb-14 lg:mb-16 xl:mb-20">
            I'm constantly learning and building things using various
            technologies.
            <br />
            Some of them are featured below
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-y-28 lg:gap-y-32 xl:gap-y-36">
        <RightAlignedProject />
        <LeftAlignedProject />
        <RightAlignedProject />
        <LeftAlignedProject />
        <RightAlignedProject />
      </div>
    </div>
  );
};

export default LargeScreenProjectsSection;
