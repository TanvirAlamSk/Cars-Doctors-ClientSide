import React from 'react';
import clocksCalendar from '../../assets/icons/calendar-clock_1.svg'
import telephone from '../../assets/icons/red-phone-7151.svg'
import location from '../../assets/icons/Location_Red_Icon_kful3t.svg'


const Banner = () => {
    return (
        <div className='my-6 flex flex-col md:flex-row gap-3 justify-between px-10 bg-black py:5 lg:py-10 text-white rounded-md'>
            <div className='flex justify-between items-center '>
                <div>
                    <img className='w-8 mr-2' src={clocksCalendar} alt=''></img>
                </div>
                <div className='text-left'>
                    <p>We are open monday-friday</p>
                    <h4>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={telephone} className='w-8 mr-2' alt=''></img>
                </div>
                <div className='text-left'>
                    <p>Have a question?</p>
                    <h3>+8801 25176 2658</h3>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-6 mr-2' src={location} alt=''></img>
                </div>
                <div className='text-left'>
                    <p>Need a repair? our address</p>
                    <h3>Dhaka, Bangladesh</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;