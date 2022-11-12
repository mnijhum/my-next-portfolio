import Image from "next/image";
import React, { useState } from "react";
import { navLinks } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import mylogo from "../public/assets/mylogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-2 justify-between items-center navbar shadow-2xl ">
      <Image
        src={mylogo}
        alt="Logo"
        width="125"
        height="50"
        className="cursor-pointer w-[100px] h-[100px]"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
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
          } p-6 absolute top-20 sidebar right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-black-gradient`}
        >
          <ul className="list-none justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
