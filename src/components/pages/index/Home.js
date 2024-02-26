import React from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Services from './Services';
import Gallery from './Gallery';
import Location from './Location';

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            <Hero />
            <Feature />
            <Services />
            <Gallery />
            <Location />
        </div>
    );
};

export default Home;