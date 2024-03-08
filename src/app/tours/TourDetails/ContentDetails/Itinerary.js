import React from 'react';
import { FaClock } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";

const Itinerary = ({ itinerary }) => {
    return (
        <div>
            <div className='bg-cyan-50 py-6 gap-4 px-3 flex items-center justify-start'>
                <span className={'bg-cyan-400 p-2 rounded-lg'}>
                    <LuCalendarClock className='text-xl text-white' />
                </span>
                <h3 className="text-lg font-bold text-cyan-900">
                    Itinerary
                </h3>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {itinerary.map((item) => (
                        <div>
                            <div className="mr-4 text-cyan-500">
                                <FaClock size={20} />
                            </div>
                            <div>
                                <p className="text-base font-bold text-gray-700 mb-1">{item.timeRange}</p>
                                <p className="text-sm text-gray-500">{item.activity}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
                *Itinerary can be changed at any time according to the situation and conditions in the field.
            </p>
        </div>
    );
};

export default Itinerary;