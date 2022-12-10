import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container' id='prd'>
            <h1 className='text-center mt-5 pt-4 pb-3 fw-bold'>SERVICES</h1>
            <div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                {
                    services.map(service => <Product key={service.id} service={service}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;