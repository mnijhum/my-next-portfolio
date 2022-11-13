import React from "react";
import Image from "next/image";
import { design, layout } from "../constants/design";
import about2 from "../public/assets/about2.svg";
const About = () => {
  return (
    <section id="about" className={`${layout.sectionReverse}`}>
      <div className={`flex-1 flex ${layout.sectionImgReverse} flex-col`}>
        <Image
          src={about2}
          alt="person2"
          className="w-[100%] h-[100%] relative z-[5] "
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h1
          className={`${design.heading2} text2-gradient md:${design.flexStart} ${design.flexCenter}`}
        >
          whoami
        </h1>

        <p className={`${design.paragraph} ${design.paddingY} text-start`}>
          I am a dreamer who dreams about being a successful person in every
          aspect of my life. Currently, I have been working as a full time
          software engineer at Intercloud Limited which is located in Dhaka,
          Bangladesh. Besides, during my leisure time, you can find me playing
          FIFA, watching TV-Series, Movies or hanging out with my friends.
          Whenever I get a chance to do something, I usually do not stop until I
          finish it.
        </p>
      </div>
    </section>
  );
};

export default About;