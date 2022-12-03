import Image from "next/image";
import React from "react";
import mylogo from "../public/assets/mylogo.svg";
import { socialMedia } from "../constants";
const Footer = () => {
  return (
    <div
      id="contact"
      className="w-full flex justify-between items-center md:flex-col flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"
    >
      <Image src={mylogo} alt="logo" className="h-[250px] w-[250px]" />
      <div className="flex flex-col items-center">
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              alt={social.name}
              className={`w-[21px] h-[21px]  object-contain cursor-pointer hover:scale-125 ease-in duration-300 ${
                index !== socialMedia.length - 1 ? "xxs:mr-1 xs:mr-6" : "mr-0"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="font-poppins font-normal pt-5 pb-2 text-center text-[18px] leading-[27px] text-dimWhite">
          © {new Date().getFullYear()} Mushfikunnabi Nijhum ☺{" "}
          <br className="xs:hidden block" /> All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
