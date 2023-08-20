import React from 'react';
import notfoundIgm from "../../assets/Notfound/404-drib23.gif"
import Header from '../../component/Header/Header';
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center'>
                <img src={notfoundIgm} alt="" />
            </div>
        </div>
    );
};

export default NotFound;