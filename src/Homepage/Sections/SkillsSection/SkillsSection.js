import SkillsHeadingSticker from "../../../Assets/Images/SkillsHeadingSticker.png";
import SkillCard from "./SkillCard";
import SkillsData from "./SkillsData";

const SkillsSection = () => {
  return (
    <section className="mx-auto py-12 xs:py-14 md:py-16 xl:py-20">
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 rounded-md gap-y-6 xs:gap-y-8 sm:gap-y-12 px-4 lg:px-8 gap-x-6">
            {SkillsData.map((skill) => (
              <SkillCard
                id={skill.id}
                key={skill.id}
                skillName={skill.skillName}
                skillSVG={skill.skillSVGSrc}
              />
            ))}
          </ul>
          <p className="text-center text-xsm-font xmd:text-sm-font text-text-grey mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20">
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
