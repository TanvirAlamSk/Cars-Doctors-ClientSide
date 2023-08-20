import React from 'react';

const FeaturesItem = ({ feature }) => {
    const { img, title } = feature
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={img} className='w-16 h-16 ' alt=''></img>
            <p>{title}</p>
        </div>
    );
};

export default FeaturesItem;