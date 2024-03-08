import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
const DetailsBanner = ({ details }) => {
    const { image } = details
    return (
        <div className={"relative overflow-hidden"}>
            <div className="w-full h-80 relative">
                <img
                    src={image}
                    alt="banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center px-24 bg-purple-950/40">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Best of {details.title}
                    </h2>
                    <div className="text-md text-white breadcrumbs">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <FaChevronRight />
                            <li>
                                <Link to="/tour">Tours</Link>
                            </li>
                            <FaChevronRight />
                            <li>
                                <Link to={`/${details.slug}`}>{details.title}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;