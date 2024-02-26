import React from 'react';
import { BsFillFileTextFill } from 'react-icons/bs';
import { FaChevronRight, FaMountain } from 'react-icons/fa';
import { FaBottleWater } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Tour = () => {
    return (
        <div className='mb-10'>
            <div className={"relative overflow-hidden"}>
                <div className="w-full h-80 relative">
                    <img src='../../assests/image/gallery/12.webp' alt="banner" className="w-full h-full object-cover" />
                    <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Explore the Beauty of East Java with Us
                        </h2>
                        <div className="text-md text-white breadcrumbs">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <FaChevronRight />
                                <li>
                                    <Link to="/tours">Tours</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div className="card shadow-md">
                    <figure className="px-10 pt-10">
                        <img src="../../assests/image/gallery/9.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Bromo Tour</h2>
                        <p>Explore the breathtaking Bromo Tengger Semeru National Park with our Bromo Tour. We offer both group and private tours to Bromo.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p className='inline-flex gap-3 items-center'> <BsFillFileTextFill /> Ticket Entrance</p>
                            <p className='inline-flex gap-3 items-center'> <FaMountain /> Boromo Tour</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-info w-full text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-md">
                    <figure className="px-10 pt-10">
                        <img src="../../assests/image/gallery/12.webp" alt="Shoes" className="rounded-xl md:h-20 lg:h-40 w-full" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Tumpaksewu Tour</h2>
                        <p>Discover the beauty of Tumpaksewu Waterfalls with our Tumpaksewu Tour. We offer both group and private tours to this mesmerizing destination
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p className='inline-flex gap-3 items-center'> <BsFillFileTextFill /> Ticket Entrance</p>
                            <p className='inline-flex gap-3 items-center'> <FaBottleWater /> Mineral Water</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-info w-full text-white">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-md">
                    <figure className="px-10 pt-10">
                        <img src="../../assests/image/gallery/4.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Ijen Blue Fire Tour</h2>
                        <p>Experience the mesmerizing Ijen Blue Fire with our Ijen Blue Fire Tour. Choose between a Group Tour or a Private Tour for a personalized...
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <p className='inline-flex gap-3 items-center'> <BsFillFileTextFill /> Ticket Entrance</p>
                            <p className='inline-flex gap-3 items-center'> <FaMountain /> Boromo Tour</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-info w-full text-white">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;