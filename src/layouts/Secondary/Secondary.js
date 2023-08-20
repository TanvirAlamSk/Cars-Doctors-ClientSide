import React from 'react';
import Header from '../../component/Header/Header';
import { Outlet } from 'react-router-dom';

const Secondary = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Secondary;