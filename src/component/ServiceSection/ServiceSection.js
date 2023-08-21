import React, { useEffect, useState } from 'react';
import ServiceSectionCard from './ServiceSectionCard/ServiceSectionCard';

const ServiceSection = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((responce) => responce.json())
            .then((data) => setServices(data))
    }, [])

    return (
        <div className=' mx-auto my-16'>
            <h6 className='text-orange-500 font-bold'>About Us</h6>
            <h2 className='font-bold text-4xl'>Our Service Area</h2>
            <p className='mt-3 text-whit font-thin my-10 lg:px-72'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map((service) => <ServiceSectionCard key={service._id} service={service}></ServiceSectionCard>)
                }
            </div>

            {/* <button className='btn btn-outline rounded text-orange-500 hover:text-white hover:bg-orange-500 mt-10'>More Services</button> */}

        </div>
    );
};

export default ServiceSection;