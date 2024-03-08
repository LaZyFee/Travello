import React from "react";
import { FaPlane } from "react-icons/fa";
import hero from "../../../assests/image/gallery/hero.webp"
import droneCap from "../../../assests/videos/footage_drone.mp4"
const Hero = () => {
  return (
    <div className="container my-8 md:my-4 mx-auto relative">
      <div className="flex flex-col-reverse md:flex-row items-center gap-3 justify-center md:justify-between">
        <div className="flex flex-col items-center justify-center md:items-start p-4 gap-5 basis-1/2 relative z-10" >
          <span className="w-fit p-3 bg-white text-cyan-500 flex items-center gap-2 rounded-full shadow-md mb-4 cursor-default hover:scale-105 transition duration-300 ease-in-out">
            <FaPlane className="text-xl" />
            <span className="font-bold">Explore the East Java!</span>
          </span>
          <h1 className="font-bold text-4xl md:text-6xl md:text-start text-center" >
            Travel Around East Java with
            <span className="text-cyan-500">Bromo Smart Tour</span>
          </h1>
          <p
            className="font-normal text-white md:text-start text-center">
            We always give the extraordinary experience for you. We provide tour
            packages around East Java for domestic and international tourists.
          </p>
          <button className="w-fit bg-cyan-500 hover:bg-cyan-600 p-2 text-white rounded-xl"> Get Started </button>
        </div>
        <div className="absolute inset-0 z-0">
          <video src={droneCap} autoPlay loop muted className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="basis-1/2 z-10">
          <img src={hero} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
