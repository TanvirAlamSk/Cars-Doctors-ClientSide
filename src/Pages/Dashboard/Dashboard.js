import React, { useState } from 'react';
import checkout from "../../assets/images/checkout/checkout.png"
import "./Dashboard.css"
import { Link } from 'react-router-dom';
import ServiceDashBoard from './ServiceDashBoard/ServiceDashBoard';
import ProductDashBoard from './ProductDashBoard/ProductDashBoard';
const Dashboard = () => {
    return (
        <div>
            <div className='img-gradient rounded-md'>
                <img className='w-full  my-6 ' src={checkout}></img>
                <h2 className='text-white font-semibold text-3xl absolute left-4 top-4 lg:left-20 lg:top-20 z-[1]'>Cart Details</h2>
                <small className='text-orange-400 font-semibold absolute left-4 top-12 lg:left-20 lg:top-32 z-[1]'>Home - Product Details</small>
            </div>
            {/* <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  bg-base-200 text-base-content">
                       
                        <li htmlFor="my-drawer-2"><a>Sidebar Item 1</a></li>
                        <li htmlFor="my-drawer-2"><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div> */}
            <ServiceDashBoard ></ServiceDashBoard>
            <ProductDashBoard></ProductDashBoard>
        </div>
    );

};

export default Dashboard;