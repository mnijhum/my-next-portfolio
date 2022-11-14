import React from "react";
import { feedback } from "../constants";
import { design } from "../constants/design";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${design.paddingY} ${design.flexCenter} flex-col relative`}
    >
      <h1 className={`${design.heading2} ${design.flexCenter} text2-gradient`}>
        Testimonials
      </h1>
      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] cursor-pointer">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
