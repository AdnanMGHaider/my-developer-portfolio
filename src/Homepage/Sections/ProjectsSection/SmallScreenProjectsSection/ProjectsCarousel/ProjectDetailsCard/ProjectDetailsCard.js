import Button from "../../../../../../Components/Button";
import ExternalLink from "../../../../../../Assets/SVG/Icons/ExternalLink";
import Github from "../../../../../../Assets/SVG/Icons/Github";

const ProjectDetailsCard = ({
  id,
  key,
  projectNumber,
  projectName,
  projectDescription,
  projectImgSrc,
  techUsedInProject,
}) => {
  return (
    <li className="bg-smallScreenProjectsCardSticker bg-cover bg-right rounded-md max-w-[40rem] mx-auto p-4 2xs:p-6 xs:p-8 xmd:px-10 xl:p-12">
      <article className="flex flex-col gap-y-6 2xs:gap-y-8 sm:gap-y-10">
        <div className="flex items-center isolate">
          <h2 className="font-display tracking-wide text-accent-orange text-xl 2xs:text-2xl xs:text-3xl sm:text-4xl z-20 whitespace-nowrap">
            {projectName}
          </h2>
          <h2 className="font-display tracking-wide text-5xl 2xs:text-6xl xs:text-7xl sm:text-8xl z-10 relative right-[1.25rem] opacity-10">
            {projectNumber}
          </h2>
        </div>
        <div className="max-w-[29rem] mx-auto">
          <img src={projectImgSrc} alt="Project Screenshot" />
        </div>
        <p className="text-center text-sm-font 2xs:text-base-font text-text-white">
          {projectDescription}
        </p>
        <p className="text-center text-xsm-font 2xs:text-sm-font overflow-hidden text-text-white">
          {techUsedInProject}
        </p>
        <div className="flex flex-col mx-auto gap-y-4 sm:gap-y-0 sm:flex-row sm:gap-x-8">
          <Button icon={<ExternalLink />}>View live site</Button>
          <Button icon={<Github />}>View code</Button>
        </div>
      </article>
    </li>
  );
};

export default ProjectDetailsCard;
