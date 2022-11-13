import React from "react";
import Image from "next/image";
import hero1 from "../public/assets/hero1.svg";
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
        <p className={design.paragraph}>Software Engineer and Developer.</p>
      </div>
      <div className={`flex-1 flex ${layout.sectionImg} flex-col`}>
        <Image
          src={hero1}
          alt="person1"
          className="w-[100%] h-[100%] relative z-[5] "
        />
      </div>
    </section>
  );
};

export default Main;
