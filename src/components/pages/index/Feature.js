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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item) => (
          <div key={item.id} className="card h-96 w-72 image-full">
            <figure><img src={item.image} alt="tour" /></figure>
            <div className="card-body">
              <h3 className="card-title font-bold">{item.title} <FaRightLong /> </h3>
              <div>
                <p>Starting From</p>
                <h5 className="text-xl font-semibold">{item.groupTour.price.domestic} / Person </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
