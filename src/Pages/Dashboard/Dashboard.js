import React from 'react';
import checkout from "../../assets/images/checkout/checkout.png"
import "./Dashboard.css"
const Dashboard = () => {
    return (
        <div>
            <div className='img-gradient rounded-md'>
                <img className='w-full  my-6 ' src={checkout}></img>
                <h2 className='text-white font-semibold text-3xl absolute left-4 top-4 lg:left-20 lg:top-20 z-[1]'>Cart Details</h2>
                <small className='text-orange-400 font-semibold absolute left-4 top-12 lg:left-20 lg:top-32 z-[1]'>Home - Product Details</small>
            </div>

        </div>
    );
};

export default Dashboard;