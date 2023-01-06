import Image from "next/image";
import React from "react";
const FeedbackCard = ({ content, name, title, img, company, profile }) => {
  return (
    <div
      className="flex shadow-xl justify-between flex-col px-7 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:scale-105 ease-in duration-300 feature-card"
      onClick={() => window.open(profile)}
    >
      <div className="flex flex-row justify-between">
        <Image
          src="https://s3.brilliant.com.bd/nijhum/portfolio-images/quotes.png"
          alt="double_quotes"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[42px] h-[27px] object-contain fill-orange-500"
        />
        <p className="font-poppins font-normal text-[14px] leading-[32px] text-white my-10">
          {content}
        </p>
      </div>

      <div className="flex flex-row">
        <Image
          src={img}
          alt={name}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <p className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </p>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
          <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
