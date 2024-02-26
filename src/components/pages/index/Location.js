import React from 'react';

const Location = () => {
    return (
        <div className='mt-5 container mx-auto'>
            <h1 className="text-3xl font-bold mb-6">CHECK OUR LOCATION</h1>
            <iframe
                className="rounded-2xl h-[32rem]  md:w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1077.2725144561477!2d112.65774125233672!3d-7.952057991848402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629abf70f3fe9%3A0x1a73271241c8507d!2sVinny%20Bromo%20Sunrise%20Adventure%20tours!5e0!3m2!1sid!2sid!4v1705159746057!5m2!1sid!2sid"
                loading="lazy"
                title="Google Map"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Location;