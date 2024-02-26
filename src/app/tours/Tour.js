import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Tour = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <div className='mb-10'>
            <div className="relative overflow-hidden">
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
                {
                    data.map(item => (

                        <div className="card shadow-md">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="TourImage" className="rounded-xl h-48 w-full" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <p className='inline-flex gap-3 items-center'> {item.groupTour.include[1].icon} {item.groupTour.include[1].name}</p>
                                    <p className='inline-flex gap-3 items-center'> {item.groupTour.include[2].icon} {item.groupTour.include[2].name}</p>
                                </div>

                                <div className="card-actions ">
                                    {/* <Link to={`/tours/${item._id}`}></Link> */}
                                    <button className="btn btn-info w-full text-white">Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tour;             