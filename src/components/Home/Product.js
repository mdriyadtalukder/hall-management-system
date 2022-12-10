import React from 'react';
import './stylee.css'

const Product = ({ service }) => {
    const { img, title, des } = service;
    return (
        <div className='col mb-4'>

            <div id='product' className='card h-100  rouded'>
                <div className='card-body pb-5 shadow-lg'>
                    <img src={img} className='img-fluid ' id='imgs' alt="" />
                    <h1 className=' fw-bold text-center'>{title}</h1>
                    <p className='pt-3'>{des}</p>

                </div>
            </div>
        </div>
    );
};

export default Product;