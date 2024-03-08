import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ item }) => {
    return (
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
                    <Link to={`/tour/${item.slug}`}>
                        <button className="btn btn-info w-full text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;