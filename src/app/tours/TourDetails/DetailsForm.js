import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { TiTickOutline } from "react-icons/ti";


const DetailsForm = ({ details }) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();

    const handleBook = (data) => {
        console.log(data);

    }

    return (
        <div className='flex justify-center items-center border-2 md:mx-5 rounded-lg sticky top-20 '>
            <div className='py-4 px-2 lg:px-8'>
                <h2 className='text-3xl font-bold'>Booking</h2>
                <p className='text-slate-500 mb-4'>Book a tour</p>

                <form onSubmit={handleSubmit(handleBook)}>


                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Username</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} placeholder="What is your name" className='input input-bordered w-full max-w-sm' />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} placeholder="What is your email" className='input input-bordered w-full max-w-sm' />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Date</span></label>
                        <input type='date' {...register("date")} placeholder="pick a date" className='input input-bordered w-full max-w-sm' />
                        <p>Your date of birth is used to calculate your age.</p>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold my-2">Tourism Type</span></label>

                        <Controller
                            name="tourism"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <div className='flex gap-3'>
                                    <input
                                        {...field}
                                        type="radio"
                                        value="domestic"
                                        id="domestic"
                                    />
                                    <label htmlFor="domestic" className='font-semibold'>Domestic</label>

                                    <input
                                        {...field}
                                        type="radio"
                                        value="international"
                                        id="international"
                                    />
                                    <label htmlFor="international" className='font-semibold '>International</label>
                                </div>
                            )}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Person</span></label>
                        <input type='number' {...register("person")} placeholder="How many person?" className='input input-bordered w-full max-w-sm' />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text font-bold">Destination</span></label>
                        <input type='text' disabled {...register("destination")} placeholder={details?.title} className='input input-bordered w-full max-w-sm font-extrabold' />
                    </div>
                    <button type="submit" className="btn mt-4 w-full bg-black text-white"><TiTickOutline /> Book Now</button>
                </form>
            </div >
        </div >
    );
};

export default DetailsForm;