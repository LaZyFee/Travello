import React from 'react';
import GroupTour from './ContentDetails/GroupTour';
import PrivateTour from './ContentDetails/PrivateTour';
import Itinerary from './ContentDetails/Itinerary';
import AdditionalInfo from './ContentDetails/AdditionalInfo';

const Details = ({ details }) => {
    // console.log(details);
    return (
        <section>
            <p className='my-8 text-base text-slate-500 leading-relaxed tracking-normal'>
                {details.description}
            </p>
            <div className='flex flex-col gap-4 justify-between'>
                <GroupTour tour={details} />
                <PrivateTour tour={details} />
                <Itinerary itinerary={details.itinerary} />
                <AdditionalInfo
                    requirements={details.requirements}
                    childrenCategory={details.childrenCategory}
                    exclude={details.exclude}
                    paymentMethods={details.paymentMethods}
                />
            </div>
        </section>
    );
};

export default Details;