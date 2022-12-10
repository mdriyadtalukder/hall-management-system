import React from 'react';
import './stylee.css'

const Footer = () => {
    return (

        <div className=' container-fluid footerr text-center'>
            <div className=' wave row footer-row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 pt-4 pb-4'>
                <div className=' col footer-col mb-4'>
                    <div className='card  footer-card h-100'>
                        <div className='card-body footer-card-body pb-5'>
                            <h4 className='h pb-3'>Services</h4>
                            <p className='p text-white'>Fully furnished rooms</p>
                            <p className='p text-white'>Storage & Drawers</p>
                            <p className='p text-white'>Housekeeping</p>
                        </div>
                    </div>
                </div>
                <div className='col footer-col mb-4'>
                    <div className='card h-100 footer-card '>
                        <div className='card-body pb-5 footer-card-body'>
                            <h4 className=' h pb-3'>Address</h4>
                            <p className=' p fw-bold text-white'>Habib Uddin Hall</p>
                            <p className=' p text-white'>Uttara,Dhaka</p>
                            <p className=' p text-white'>Sector-07,Road-6745</p>
                        </div>
                    </div>
                </div>
                <div className='col footer-col mb-4'>
                    <div className='card h-100 footer-card '>
                        <div className='card-body pb-5 footer-card-body' >
                            <h4 className='pb-3 h'>Contact</h4>
                            <a className='anchor text-white' href="https://mail.google.com/mail/u/0/#inbox">Email</a><br />
                            <a className='anchor text-white' href="https://www.facebook.com/">Facebook</a><br />
                            <a className='anchor text-white' href="https://www.instagram.com/accounts/login/">Instagram</a><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-2'>
                <a className='anchor me-3 fs-4' href="https://mail.google.com/mail/u/0/#inbox"><i class="fas fa-envelope"></i></a>
                <a className='anchor me-3 fs-4' href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                <a className='anchor fs-4' href="https://www.instagram.com/accounts/login/"><i class="fab fa-instagram"></i></a>
            </div>
            <div className=" wave text-center pb-3">
                <p className='text-white'>Copyright © 2022 Habib Uddin Hall</p>
            </div>
        </div>

    );
};

export default Footer;