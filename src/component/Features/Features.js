import React from 'react';
import img1 from "../../assets/icons/group.svg"
import img2 from "../../assets/icons/clock.svg"
import img3 from "../../assets/icons/person.svg"
import img4 from "../../assets/icons/Wrench.svg"
import img5 from "../../assets/icons/check.svg"
import img6 from "../../assets/icons/deliveryt.svg"
import FeaturesItem from './FeaturesItem/FeaturesItem';

const features = [
    {
        id: 1,
        img: img1,
        title: "Expert Team"
    },
    {
        id: 2,
        img: img2,
        title: "Timely Delivery"
    },
    {
        id: 3,
        img: img3,
        title: "24/7 Support"
    },
    {
        id: 4,
        img: img4,
        title: "Best Equipment"
    },
    {
        id: 5,
        img: img5,
        title: "100% Guranty"
    },
    {
        id: 6,
        img: img6,
        title: "Timely Delivery"
    }
]

const Features = () => {
    return (
        <div className='mb-28'>
            <h6 className='text-orange-500 font-bold'>Core Features</h6>
            <h2 className='font-bold text-4xl'>Why Choose Us</h2>
            <p className='mt-3 text-whit font-thin my-10 lg:px-72'>Tthe majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 '>
                {
                    features.map((feature) => <FeaturesItem key={feature.id} feature={feature}></FeaturesItem>)
                }
            </div>
        </div>
    );
};

export default Features;