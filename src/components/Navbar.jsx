import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import LogoMob from "../assets/LogoMob.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px] flex justify-between mx-auto h-24 pt-4 px-4 items-center">
      {/* main menu */}
      <img src={Logo} alt="logo" className="hidden md:flex" />
      <ul className="hidden md:flex ">
        <li className="font-bold font-custom2 text-sm lg:text-lg p-6">
          Services
        </li>
        <li className="font-bold font-custom2 text-sm lg:text-lg p-6">
          Resources
        </li>
        <li className="font-bold font-custom2 text-sm lg:text-lg p-6">Blog</li>
      </ul>
      <button className="hidden md:block text-white font-custom2 text-md w-[150px] md:w-[150px] py-2 border rounded-md bg-gradient-to-r from-[#de3300] to-[#e85d04]">
        Push to Start!
      </button>
      {/* mobile menu */}
      <div className="flex md:hidden">
        <div onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <img src={LogoMob} alt="logo" className="pl-5" />
      </div>
      <ul
        className={
          nav
            ? "md:hidden fixed top-[12%] border left-0 bg-white w-[200px] h-[200px] ease-in-out duration-1000 z-10"
            : "ease-in-out duration-1000 fixed top-[10%] left-[-100%]"
        }
      >
        <li className="font-bold font-custom2 text-lg p-3">Services</li>
        <li className="font-bold font-custom2 text-lg p-3">Resources</li>
        <li className="font-bold font-custom2 text-lg p-3">Blog</li>
      </ul>
      <button className="md:hidden text-white text-sm w-[100px] py-2 border rounded-md bg-gradient-to-r from-[#de3300] to-[#e85d04]">
        Push to Start!
      </button>
    </div>
  );
};

export default Navbar;
