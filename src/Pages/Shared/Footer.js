import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <div className='p-10 bg-blue-800'>
                <div className='flex text-accent'>
                    <div className='flex-1'>
                        <h2></h2>
                        <p></p>
                        <p className='text-success'></p>
                    </div>
                    <div className='flex-1'>
                        <h2>Contact</h2>
                        <p><IoLocationOutline /> Via Roshini 10,10136 Turin</p>
                    </div>
                    <div className='flex-1'>
                        <h2>Links</h2>
                        <p><Link className='text-decoration-none text-white' to='/'>Home</Link></p>
                    </div>
                </div>
            </div>
            <p className='text-center my-5'>Copyright @{year} <span className='text-primary'> Paintgenix </span> All rights reserved</p>
        </div>
    );
};

export default Footer;