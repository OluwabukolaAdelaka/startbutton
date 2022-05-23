import React from "react";
import Group from "../assets/Group.png";

const Hero = () => {
  return (
    <div className="max-w-[1240px] w-full h-screen grid md:grid-cols-2 mx-auto px-4 pt-16">
      {/* image part */}
      <div className="relative left-[0px] top-[400px] md:left-[278px] md:top-[106px] lg:left-[508px] right-0">
        <img src={Group} alt="group" className="object-fit" />
      </div>
      {/* text-part */}
      <div className="text-left absolute">
        <h1 className="text-[#03071e] w-[80%] lg:w-[60%] font-custom2 text-3xl md:text-6xl font-extrabold">
          Your Gateway to Emerging Markets
        </h1>
        <p className="text-[#727987] w-[80%] lg:w-[55%] font-custom1 text-[26px] leading-[35px] mt-1 py-5 ">
          Startbutton is a digital platform that enables foreign businesses to
          sell to Africa while enabling African merchants to sell to the rest of
          the world.
        </p>
        <div className="block md:flex bg-white border border-slate-900 rounded-md mt-4 p-2 w-[70%] lg:w-[50%]">
          <input
            type="text"
            className="w-[70%] pl-2 text-lg"
            placeholder="Enter your email"
          />
          <button className="hidden md:block text-white bg-[#03071e] font-custom1 w-[30%] font-bold text-sm text-center border rounded-md p-3">
            Join the waitlist
          </button>
        </div>
        <button className="md:hidden text-white bg-[#03071e] font-custom1 w-[40%] font-bold text-sm text-center border rounded-md p-3 mt-2">
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
