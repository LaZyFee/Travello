import React from "react";
import { FaRightLong } from "react-icons/fa6";
const Feature = () => {
  return (
    <div className="container mx-auto md:px-4">
      <div className="mb-10">
        <h2
          className="text-xl xl:text-2xl font-bold text-gray-900 tracking-wide uppercase">
          Recommended Tours
        </h2>
        <p className="text-gray-600 font-light text-lg">
          We provide tour packages around East Java for domestic and
          international tourists.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <div className="card h-96 w-72 image-full">
          <figure><img src="../../../assests/image/gallery/8.webp" alt="tour" /></figure>
          <div className="card-body">
            <h3 className="card-title font-bold">Bromo Tour <FaRightLong /> </h3>
            <div>
              <p>Starting From</p>
              <h5 className="text-xl font-semibold">Rp 350.000,00 / Person </h5>
            </div>
          </div>
        </div>
        <div className="card h-96 w-72 image-full">
          <figure><img src="../../../assests/image/gallery/11.webp" alt="tour" /></figure>
          <div className="card-body">
            <h3 className="card-title font-bold">Ijen Blue Fire Tour <FaRightLong /> </h3>
            <div>
              <p>Starting From</p>
              <h5 className="text-xl font-semibold">Rp 400.000,00 / Person </h5>
            </div>
          </div>
        </div>
        <div className="card h-96 w-72 image-full">
          <figure><img src="../../../assests/image/gallery/10.webp" alt="tour" /></figure>
          <div className="card-body">
            <h3 className="card-title font-bold">Bromo Tour <FaRightLong /> </h3>
            <div>
              <p>Starting From</p>
              <h5 className="text-xl font-semibold">Rp 350.000,00 / Person </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
