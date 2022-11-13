import Image from "next/image";
import React from "react";
import quotes from "../public/assets/quotes.png";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex shadow-xl justify-between flex-col px-7 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:scale-105 ease-in duration-300 feature-card">
      <div className="flex flex-row justify-between">
        <Image
          src={quotes}
          alt="double_quotes"
          className="w-[42px] h-[27px] object-contain fill-orange-500"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
          {content}
        </p>
      </div>

      <div className="flex flex-row">
        <Image
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
