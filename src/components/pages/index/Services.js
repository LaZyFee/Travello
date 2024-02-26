import React from 'react';
import { FaPlane } from 'react-icons/fa';
import { FaPeopleGroup, FaCampground, FaServicestack } from "react-icons/fa6";
const Services = () => {
    return (
        <div className='z-10 mt-10'>
            <hr />
            <h1 className='text-3xl font-bold text-center md:text-start'>Our Service</h1>
            <p className='text-center md:text-start'>We give you the best service for your trip, so you can enjoy your trip without any worries.</p>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <FaPlane className="text-5xl bg-cyan-200 text-cyan-400 rounded-md p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SERVICE YOUR TRIP</h2>
                        <p>We provide personalized trip services in Malang, Banyuwangi, and Jogja.</p>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <FaPeopleGroup className="text-5xl bg-cyan-200 text-cyan-400 rounded-md p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">GROUP AND PRIVATE TOURS</h2>
                        <p>Choose from our group tours or opt for a private tour tailored to your preferences.</p>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <FaCampground className="text-5xl bg-cyan-200 text-cyan-400 rounded-md p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CAMP AND TREKKING</h2>
                        <p>Experience camping and trekking adventures to breathtaking locations, including Ijen, Semeru, and more.</p>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <FaServicestack className="text-5xl bg-cyan-200 text-cyan-400 rounded-md p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TOUR PACKAGES</h2>
                        <p>We provide tour packages around East Java for domestic and international tourists.</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Services;