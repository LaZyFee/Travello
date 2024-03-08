import React from 'react';
import { HiLocationMarker } from "react-icons/hi";


const Title = ({ details }) => {
    const { title } = details;

    // console.log(details.gallery);
    return (
        <div className='flex flex-col gap-3 mt-8 container md:mx-12 my-4'>
            <div className='flex items-center gap-3'>
                <HiLocationMarker className={'text-purple-500 text-3xl'} />
                <h2 className="text-xl md:text-3xl font-bold">
                    {title}
                </h2>
            </div>
            <div className='flex items-center text-sm'>
                <p className="text-gray-400 font-light text-start tracking-tight">
                    Start and end in <span className='font-semibold text-gray-600'>{title.slice(0, title.indexOf(' '))}</span>
                </p>
                <span className='bg-gray-500 h-1 w-1 mx-2 rounded-full' />
                <p className="text-gray-400 font-light text-start tracking-tight">
                    <span className='font-semibold text-gray-600'>1</span> days in total
                </p>
            </div>

        </div>


    );
};

export default Title;