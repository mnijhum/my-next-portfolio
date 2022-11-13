import React from "react";
import { design } from "../constants/design";
import { education, experiences } from "../constants";
const Timeline = () => {
  return (
    <div id="resume">
      <p className={`${design.heading2} ${design.flexCenter} text2-gradient`}>
        Timeline
      </p>
      <div className={`${design.paddingY} grid sm:grid-cols-2`}>
        <div>
          <p className={design.paragraph}>Education</p>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {education.map((edu) => (
              <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {edu.time}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.name}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {edu.institute} - {edu.grade}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* experience */}
        <div>
          <p className={design.paragraph}>Experience</p>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            {experiences.map((exp) => (
              <li key={exp.id} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {exp.time}
                </time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {exp.institute}
                </p>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Contributions:
                </p>
                <ol className="pl-6 border-l border-gray-200 dark:border-gray-700">
                  {exp.contributions.map((contribution) => (
                    <li key={contribution.name} className="text-dimWhite">
                      - {contribution.name}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
