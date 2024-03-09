import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Services from './Services';
import Gallery from './Gallery';
import Location from './Location';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="container mx-auto px-4">
            <Hero />
            <Feature />
            <Services />
            <Gallery data={data} />
            <Location />
        </div>
    );
};

export default Home;