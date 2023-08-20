import React from 'react';
import "./HeaderSliderCard.css"

const HeaderSliderCard = ({ image, i }) => {
    return (
        <div id={`slide${i}`} className="carousel-item relative w-full">
            <img alt='' src={image} className="w-full banner-img" />
            <div className='absolute transform  text-white left-5 md:left-28 bottom-0  md:bottom-1/3'>
                <h1 className='text-left text-4xl font-bold  '>  Affordable <br></br> Price For Car <br></br>Servicing</h1>
                <p className='w-3/5 text-left mt-4'>  There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className='text-left my-2'>
                    <button className='px-8 py-2 me-3 bg-orange-600 hover:bg-orange-800'>Discover More</button>
                    <button className='px-8 py-2 me-3 bg-orange- border hover:bg-orange-600'>Latest Project</button>
                </div>

            </div>

            <div className="absolute flex justify-end md:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-8 md:bottom-1/2 ">

                <a href={`#slide${i - 1}`} className={`${i == 0 && 'hidden'}   btn btn-circle text-white bg-orange-500 hover:bg-orange-700`}>❮</a>
                <span className={`${i == 0 || 'hidden'} `}></span>
                <a href={`#slide${i + 1}`} className={`${i == 3 && 'hidden'} btn btn-circle  text-white bg-orange-500 hover:bg-orange-700`}>❯</a>
            </div>
        </div>
    );
};

export default HeaderSliderCard;