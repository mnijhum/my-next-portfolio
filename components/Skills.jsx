import React from "react";
import { design } from "../constants/design";
import { skills } from "../constants";
import Image from "next/image";
const Skills = () => {
  return (
    <div id="skill" className={design.paddingY}>
      <h1
        className={`${design.heading2} text2-gradient md:${design.flexStart} ${design.flexCenter}`}
      >
        Top Skills
      </h1>

      <div
        className={`${design.paddingY} grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 feature-card"
          >
            <div className="grid xs:grid-cols-2 gap-4 justify-center items-center xxs:grid-rows-2 h-5">
              <div className="xs:mr-4 xxs:hidden xs:block inline-block">
                <Image
                  src={skill.icon}
                  alt={skill.id}
                  className="xxs:h-[15px] xxs:w-[15px] xs:h-[35px] xs:w-[35px] md:h-[40px] md:w-[40px] h-[0px] w-[0px] shrink-0"
                />
              </div>
              <div className={`${design.flexCenter}`}>
                <p className={`${design.paragraph}`}>{skill.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
