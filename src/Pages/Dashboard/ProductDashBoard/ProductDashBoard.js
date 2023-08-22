import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';
import { Link, json } from 'react-router-dom';
import DashBoardRow from '../DashBoardRow';
import Loader from '../../../component/Loader/Loader';
import { toast } from 'react-toastify';

const ProductDashBoard = () => {
    const { user, loader } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/order?email=${user?.email}`)
            .then((responce) => responce.json())
            .then((data) => setOrders(data))
    }, [user?.email])

    const notifyDeleteProduct = () => {
        toast.success("Product's order cancel", {
            position: toast.POSITION.TOP_CENTER
        });
    }


    if (loader) {
        return <Loader></Loader>
    }
    const handleDelate = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: "DELETE"
        })
            .then((responce) => responce.json())
            .then((data) => {
                if (data.acknowledged) {
                    const rest = orders.filter((order) => order._id != id)
                    setOrders(rest);
                    notifyDeleteProduct()
                }
            })

    }

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
                                    orders.map((order) => <DashBoardRow
                                        key={order._id} order={order} handleDelate={handleDelate}></DashBoardRow>)
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