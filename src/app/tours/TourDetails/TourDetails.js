import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsBanner from './DetailsBanner';
import Details from './Details';
import DetailsForm from './DetailsForm';
import Title from './Title';
import SwiperItem from './SwiperItem';

const TourDetails = () => {
    const { slug } = useParams();


    const [tourData, setData] = useState([]);
    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const slugData = tourData.find(item => item.slug === slug);


    return (
        <div>
            {slugData ? (
                <>
                    <DetailsBanner details={slugData} />
                    <Title details={slugData} />
                    <div className="container mx-auto px-4 py-8 md:flex relative">
                        <div className="w-full md:w-3/4  lg:w-2/3">
                            <SwiperItem gallery={slugData?.gallery} />
                            <Details details={slugData} />
                        </div>
                        <div className="w-full lg:w-1/3">
                            <DetailsForm details={slugData} />
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TourDetails;
