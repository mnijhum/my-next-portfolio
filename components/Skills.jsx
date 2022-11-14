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
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="mr-4">
                <Image
                  src={skill.icon}
                  alt={skill.id}
                  className="xs:h-[40px] xs:w-[40px]"
                />
              </div>
              <div className={design.flexCenter}>
                <p className={design.paragraph}>{skill.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
