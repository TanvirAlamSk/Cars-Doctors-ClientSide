import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("catalog.json")
            .then((responce) => responce.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div className='my-32 '>
            <h6 className='text-orange-500 font-bold'>Popular Products</h6>
            <h2 className='font-bold text-4xl'>Browse Our Products</h2>
            <p className='mt-3 text-whit font-thin my-10 lg:px-72'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    products.map((product, i) => i < 6 && <Product key={product._id} product={product}></Product>)
                }
            </div>
            <Link to="/product">
                <button className='btn btn-outline rounded text-orange-500 hover:text-white hover:bg-orange-500 mt-10'>More Products</button>
            </Link>
        </div>
    );
};

export default Products;