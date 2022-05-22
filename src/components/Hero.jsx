import React from "react";
import Group from "../assets/Group.png";

const Hero = () => {
  return (
    <div className="max-w-[1240px] w-full h-screen mx-auto py-24 pl- flex">
      <div className="relative left-[400px] top-[146px] right-0">
        <img src={Group} alt="group" />
      </div>
      <div className="text-left absolute">
        <h1 className="text-[#03071e] w-[60%] font-custom2 text-8xl font-extrabold">
          Your Gateway to Emerging Markets
        </h1>
        <p className="text-[#727987] w-[40%] font-custom1 text-[26px] leading-[35px]  mt-2 py-8 ">
          Startbutton is a digital platform that enables foreign businesses to
          sell to Africa while enabling African merchants to sell to the rest of
          the world.
        </p>
        <div className="bg-white border rounded-md mt-4 p-2 w-[30%]">
          <input
            type="text"
            className="w-[60%] pl-2 text-lg"
            placeholder="Enter your email"
          />
          <button className="text-white bg-[#03071e] font-custom1 w-[40%] font-bold text-sm text-center border rounded-md p-3">
            Join the waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
