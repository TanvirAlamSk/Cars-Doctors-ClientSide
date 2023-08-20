import React from 'react';

const ServiceFacility = ({ item }) => {
    const { details, name } = item
    return (
        <div className='text-left border p-5 rounded-md'>
            <h5 className='text-lg font-medium'>{name}</h5>
            <p>{details}</p>
        </div>
    );
};

export default ServiceFacility;