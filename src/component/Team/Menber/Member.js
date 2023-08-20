import React from 'react';
import im1 from "../../../assets/images/team/1.jpg"
import im2 from "../../../assets/images/team/2.jpg"
import im3 from "../../../assets/images/team/3.jpg"

const Member = () => {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item w-1/3 border rounded">
                <div className='p-10'>
                    <img src={im1} alt="Burger" />
                    <h5 className='font-bold mt-3'>Car Engine Plug</h5>
                    <p>Engine Expert</p>
                </div>
            </div>
            <div className="carousel-item w-1/3 mx-8 border rounded">
                <div className='p-10'>
                    <img src={im3} alt="Burger" />
                    <h5 className='font-bold mt-3'>Car Engine Plug</h5>
                    <p>Engine Expert</p>
                </div>
            </div>
            <div className="carousel-item w-1/3 border rounded">
                <div className='p-10'>
                    <img src={im2} alt="Burger" />
                    <h5 className='font-bold mt-3'>Car Engine Plug</h5>
                    <p>Engine Expert</p>
                </div>
            </div>

        </div>
    );
};

export default Member;