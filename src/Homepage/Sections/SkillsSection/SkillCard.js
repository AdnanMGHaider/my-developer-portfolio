import React from "react";

const SkillCard = ({ id, key, skillName, skillSVG }) => {
  return (
    <li className="">
      <article className="h-auto flex flex-col w-full gap-y-2 xs:gap-y-4">
        <div className="w-full h-[6rem] flex flex-col">{skillSVG}</div>
        <p className="h-auto w-full text-center flex flex-col items-center justify-center text-sm-font 2xs:text-base-font xmd:text-lg-font">
          {skillName}
        </p>
      </article>
    </li>
  );
};

export default SkillCard;
