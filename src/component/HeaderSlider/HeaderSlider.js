import React from 'react';
import banner1 from "../../assets/images/homeCarousel/1.jpg"
import banner2 from "../../assets/images/homeCarousel/2.jpg"
import banner3 from "../../assets/images/homeCarousel/3.jpg"
import banner4 from "../../assets/images/homeCarousel/4.jpg"
import "./HeaderSlider.css"
import HeaderSliderCard from './HeaderSliderCard/HeaderSliderCard';
const images = [banner1, banner2, banner3, banner4]
const HeaderSlider = () => {
    return (
        <div className="carousel  rounded-lg mt-6">
            {
                images.map((image, i) => <HeaderSliderCard key={i} image={image} i={i} ></HeaderSliderCard>)
            }
        </div>
    );
};

export default HeaderSlider;