import React from 'react';
import '../../../App.css';

const Gallery = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className="text-3xl font-bold text-center md:text-start mb-5">Gallery</h1>
            <p className="text-center md:text-start mb-5">Look at our gallery, and see how beautiful Indonesia is.</p>
            < div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/1.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/2.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/3.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/4.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/5.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/6.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/7.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/8.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/9.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/10.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/11.webp" alt="" />
                <img className="gallery-image transition hover:translate-y-1 hover:scale-110 " src="../../../assests/image/gallery/12.webp" alt="" />
            </div>
        </div>
    );
};

export default Gallery;