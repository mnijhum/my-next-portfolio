import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { design, layout } from "../constants/design";
const Main = () => {
  return (
    <section id="home" className={`${layout.section}`}>
      <div
        className={`${layout.sectionInfo} md:${design.flexStart} ${design.flexCenter}`}
      >
        <p className={`${design.paragraph}`}>Hi 👋, I'm</p>
        <h1 className={`${design.heading2} text2-gradient text-center`}>
          Mushfikunnabi Nijhum
        </h1>
        <div className={design.paragraph}>
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Web Developer",
                "DevOps Enthusiast",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              delay: 20,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>
      <div className={`flex-1 flex ${layout.sectionImg} flex-col`}>
        <Image
          src="https://s3.brilliant.com.bd/nijhum/portfolio-images/hero1.png"
          alt="person1"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[100%] h-[100%] relative z-[5] "
        />
      </div>
    </section>
  );
};

export default Main;
