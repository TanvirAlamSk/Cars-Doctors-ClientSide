import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import DashBoardRow from '../DashBoardRow';
import Loader from '../../../component/Loader/Loader';

const ServiceDashBoard = () => {

    const { user, loader } = useContext(AuthContext)


    const [purchaseServece, setPurchaseServece] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/order?email=${user?.email}`)
            .then((responce) => responce.json())
            .then((data) => setPurchaseServece(data))
    }, [user?.email])
    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-left text-orange-500' >All Services</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Image</th>
                                <th>Name/Address</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchaseServece.map((service) => <DashBoardRow
                                    key={service._id} service={service}></DashBoardRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ServiceDashBoard;