import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import DashBoardRow from '../DashBoardRow';

const ProductDashBoard = () => {
    const { user } = useContext(AuthContext)
    const [purchaseProduct, setPurchaseProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/order?email=${user?.email}`)
            .then((responce) => responce.json())
            .then((data) => setPurchaseProduct(data))
    }, [user?.email])
    return (
        <div className='mt-10'>

            <h2 className='text-2xl font-bold text-left text-orange-500'>All Product</h2>
            <div>
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
                                    purchaseProduct.map((service) => <DashBoardRow
                                        key={service._id} service={service}></DashBoardRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDashBoard;