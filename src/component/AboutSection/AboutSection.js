import React from 'react';
import aboutimg1 from "../../assets/images/about_us/person.jpg"
import aboutimg2 from "../../assets/images/about_us/parts.jpg"

const AboutSection = () => {
    return (
        <div className=' mx-auto lg:flex justify-between mt-28 '>
            <div className='w-full lg:w-1/2 m-0 p-4 bg-re-200 py-5'>
                <img className='w-3/5  rounded-lg' src={aboutimg1} alt=''></img>
                <img className='w-2/5 -mt-28 md:-mt-36 ml-32 md:ml-44 rounded-lg border-4 border-red-300 z-[1]' src={aboutimg2} alt=''></img>
            </div>
            <div className='w-full lg:w-1/2 text-left bg-slat-600 p-10 mt-6 md:mt-0'>
                <h6 className='text-orange-500 font-bold'>About Us</h6>
                <h2 className='font-bold text-3xl text-whit'>We are qualified <br></br>& of experience <br></br> in this field</h2>
                <p className='mt-4 text-whit font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className='mt-3 text-whit font-thin'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className='my-3'>
                    <button className='btn-outline border px-5 py-2 text-white  bg-orange-500 hover:bg-orange-600'>Get More Info</button>
                </div>
            </div>

        </div>
    );
};

export default AboutSection;