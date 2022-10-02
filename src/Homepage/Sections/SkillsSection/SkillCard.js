import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ id, key, skillName, skillSVG, variants }) => {
  return (
    <motion.li variants={variants} className="">
      <article className="h-auto flex flex-col w-full gap-y-2 xs:gap-y-4">
        <div className="w-full h-[6rem] flex flex-col">{skillSVG}</div>
        <p className="h-auto w-full text-center flex flex-col items-center justify-center text-sm-font 2xs:text-base-font xmd:text-lg-font">
          {skillName}
        </p>
      </article>
    </motion.li>
  );
};

export default SkillCard;
