import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="home" className={"w-full flex py-2 justify-between items-center"}>
      <Image
        src="https://s3.brilliant.com.bd/nijhum/portfolio-images/mylogo.svg"
        alt="Logo"
        width="125"
        height="50"
        className="cursor-pointer w-[100px] h-[100px] items-center hover:scale-105 ease-in duration-300"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:scale-105 ease-in duration-300 hover:text-lg ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {nav.id === "blog" ? (
              <a href={nav.link} target="__blank">
                {nav.title}
              </a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {" "}
        {!toggle ? (
          <AiOutlineMenu
            className="w-[28px] h-[28px] object-contain text-white"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <AiOutlineClose
            className="w-[28px] h-[28px] object-contain text-white"
            onClick={() => setToggle(!toggle)}
          />
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 sidebar right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-orange-gradient`}
        >
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                {nav.id === "blog" ? (
                  <a href={nav.link} target="__blank">
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
