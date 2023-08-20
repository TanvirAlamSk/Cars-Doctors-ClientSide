import React from 'react';
import HeaderSlider from '../../component/HeaderSlider/HeaderSlider';
import AboutSection from '../../component/AboutSection/AboutSection';
import ServiceSection from '../../component/ServiceSection/ServiceSection';
import Banner from '../../component/Banner/Banner';
import Products from '../../component/Product/Products';
import Team from '../../component/Team/Team';
import Features from '../../component/Features/Features';

const Home = () => {
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
            <Banner></Banner>
            <Products></Products>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;