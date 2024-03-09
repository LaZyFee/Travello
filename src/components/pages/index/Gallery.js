import React from 'react';
import '../../../App.css';
import { GalleryData } from '../../../Data/GalleryData';
const Gallery = () => {

    const gallery = GalleryData

    return (
        <div className='container mx-auto mt-10'>
            <h1 className="text-3xl font-bold text-center md:text-start mb-5">Gallery</h1>
            <p className="text-center md:text-start mb-5">Look at our gallery, and see how beautiful Indonesia is.</p>
            < div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    gallery.map(item => (
                        <img src={item.image} alt={item.description} key={item.description} className="gallery-image transition hover:translate-y-1 hover:scale-110" />
                    ))
                }
            </div>
        </div>
    );
};

export default Gallery;
