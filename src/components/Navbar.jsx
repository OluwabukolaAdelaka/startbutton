import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="max-w-[1240px] flex justify-between mx-auto h-24 py-8 items-center">
      <img src={Logo} alt="logo" />
      <ul className="flex ">
        <li className="font-bold text-lg p-6">Services</li>
        <li className="font-bold text-lg p-6">Resources</li>
        <li className="font-bold text-lg p-6">Blog</li>
      </ul>
      <button className="text-white text-md w-[150px] py-2 border rounded-md bg-gradient-to-r from-[#de3300] to-[#e85d04]">
        Push to Start!
      </button>
    </div>
  );
};

export default Navbar;
