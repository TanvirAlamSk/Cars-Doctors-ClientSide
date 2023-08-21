import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceFacility from './ServiceFacility/ServiceFacility';
import { FaArrowRight } from 'react-icons/fa';
import logo from "../../assets/logo.svg"

const Service = () => {
    const service = useLoaderData()
    const { _id, img, description, price, title, facility } = service
    return (
        <div className='flex flex-col md:flex-row w-full my-10'>
            <div className='w-full md:w-3/4 md:p-6 md:pl-0'>
                <img src={img} className='rounded w-full' alt="" srcSet="" />
                <h2 className='text-3xl font-bold mt-10'>{title}</h2>
                <p className='text-left my-6'>{description}</p>
                <div className='grid grid-cols-2 gap-5'>
                    {
                        facility.map((item, i) => <ServiceFacility key={i} item={item}></ServiceFacility>)
                    }
                </div>
            </div>
            <div className='w-full md:w-1/4 md:mt-6'>
                <ul className='bg-slate-200 py-10 rounded'>
                    <Link to="/service/64e2fc5450b67a216d2ab168">
                        <li className=' my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Full Car Repair <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>

                    <Link to="/service/64e2fc5450b67a216d2ab169">
                        <li className='my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Engine Repair <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>

                    <Link to="/service/64e2fc5450b67a216d2ab16a">
                        <li className=' my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Automatic Services <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>
                    <Link to="/service/64e2fc5450b67a216d2ab166">
                        <li className=' my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Engine Oil Change <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>
                    <Link to="/service/64e2fc5450b67a216d2ab16b">
                        <li className=' my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Electrical System <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>
                    <Link to="/service/64e2fc5450b67a216d2ab167">
                        <li className=' my-2'>
                            <button className='btn text-left w-52 text-orange-500 hover:text-white hover:bg-orange-500 '>Battery Charge <FaArrowRight></FaArrowRight>
                            </button>
                        </li>
                    </Link>
                </ul>

                <div className='bg-black mt-8 rounded-md pb-10'>
                    <div className='flex justify-center pt-10'>
                        <img src={logo}></img>
                    </div>
                    <div className='m-10'>
                        <p className='font-bold text-white'>Need Help? We Are Here
                            To Help You</p>
                    </div>
                    <div className="bg-white m-12 mb-0 py-6 rounded ">
                        <p className='text-md font-semibold'><span className='text-orange-400'>Car Doctor</span> Special</p>
                        <small className='font-bold'>Save up to<span className='text-orange-400'> 60% off</span></small>
                    </div>
                    <button className='btn bg-orange-500 -mt-6 border-none text-white font-semibold hover:bg-orange-700'>Get A Quote</button>

                </div>
                <h3 className='text-3xl font-bold text-left mt-3'>Price: ${price}</h3>
                <Link to={`/checkout/${_id}`}>
                    <button className='btn my-5 w-full bg-orange-500 border-none text-white font-semibold hover:bg-orange-700'>Check Out</button>
                </Link>
            </div>

        </div>
    );
};

export default Service;