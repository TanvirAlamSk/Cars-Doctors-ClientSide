import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceSectionCard = ({ service }) => {
    const { title, img, price, _id } = service

    return (
        <div>
            <div className="card w-96 md:w-80 lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img className='w-full h-60 m-4' src={img} alt="Shoes" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <h5 className='font-semibold text-orange-600'>Price: ${price}</h5>
                        <Link to={`/service/${_id}`}>
                            <button className="text-orange-600">
                                <FaArrowRight></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;