import React from "react";
import { FaRightLong } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const Feature = () => {
  const data = useLoaderData().data;

  return (
    <div className="container mx-auto md:px-4">
      <div className="mb-10">
        <h2 className="text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase">
          Recommended Tours
        </h2>
        <p className="text-gray-600 font-light text-lg">
          We provide tour packages around East Java for domestic and
          international tourists.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
        {data.map((item) => (
          <div
            key={item.image}
            className="relative overflow-hidden group rounded-lg card h-96 w-72"
          >
            <img
              src={item.image}
              alt="tour"
              className="object-cover w-full h-full transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black-700 opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold flex items-center gap-2 mb-2">
                {item.title} <FaRightLong />
              </h3>
              <div>
                <p className="text-white">Starting From</p>
                <h5 className="text-xl font-semibold text-white">
                  {item.groupTour.price.domestic} / Person
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
