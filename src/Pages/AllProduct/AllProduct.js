import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../component/Product/Product/Product';

const AllProduct = () => {
    const allProducts = useLoaderData()
    return (
        <div className='my-20 '>
            <h2 className='font-bold text-4xl text-orange-600'>Our All Products</h2>
            <p className='mt-3 text-whit font-thin my-10 lg:px-72'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    allProducts.map((product, i) => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default AllProduct;