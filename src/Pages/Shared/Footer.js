import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXingSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <div className='p-10 bg-blue-800'>
                <div className='lg:flex grid-cols-1 text-white'>

                    <div className='flex-1'>
                        <h2 className=' text-xl'>Conatact us</h2>
                        <p className='font-bold text-2xl text-primary my-5'>Paintgenix</p>

                        <div className='flex mb-3'>
                            <p className='text-2xl text-gray-300'><IoLocationOutline /></p>
                            <p className=' text-accent ml-2'> #1 Industrial Drive Pacific Mo, 63069</p>
                        </div>

                        <div className='flex mb-3'>
                            <p className='text-2xl text-gray-300'><MdOutlineEmail /></p>
                            <p className=' text-accent ml-2'>info@proroller.com</p>
                        </div>
                        <div className='flex mb-3'>
                            <p className='text-2xl text-gray-300'><BsTelephone /></p>
                            <p className=' text-accent ml-2'> Phone: 1.833.491.4744</p>
                        </div>

                        <div className='flex mb-3'>
                            <p className='text-2xl text-gray-300'><FaXingSquare /></p>
                            <p className=' text-accent ml-2'> Fax: (636) 271-2843</p>
                        </div>
                    </div>

                    <div className='flex-1 mt-10'>
                        <h2 className='text-xl mb-5'>Products</h2>
                        <p className='text-accent mt-3'>Roller Covers</p>
                        <p className='text-accent mt-3'>Pop Display & Tray Sets</p>
                        <p className='text-accent mt-3'>Mini Roller</p>
                        <p className='text-accent mt-3'>Roller Frames</p>
                        <p className='text-accent mt-3'>Brushes</p>
                        <p className='text-accent mt-3'>Painters Tape</p>
                    </div>

                    <div className='flex-1 mt-10'>
                        <h2 className=' text-xl mb-5'>Newsletter</h2>
                        <p className='mt-3 text-accent'>Subscribe to our newsletter for updates</p>
                        <div className='my-5'>
                            <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <button className="btn btn-primary px-8 hover:btn-secondary">Subscribe</button>
                    </div>

                    <div className='flex-1 text-center hidden lg:block'>
                        <h2 className=' text-xl mb-5'>Links</h2>
                        <p className='mt-3'><Link className='text-decoration-none text-accent' to='/'>Home</Link></p>
                        <p className='mt-3'><Link className='text-decoration-none text-accent' to='/'>About us</Link></p>
                        <p className='mt-3'><Link className='text-decoration-none text-accent' to='/blog'>Blog</Link></p>
                        <p className='mt-3'><Link className='text-decoration-none text-accent' to='/login'>Login</Link></p>
                    </div>

                    <div className='flex-1 hidden lg:block'>
                        <h2 className=' text-xl mb-5'>Dealer Location</h2>
                        <img src="https://39jk6k3jo8h6q03yhjtay21a-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/dealer-location.png" alt="" />
                        <p className='mt-3 text-accent'>Find out dealer location</p>
                        <p className='mt-3 text-xl text-accent font-bold'>Website design by Shakiba Alam</p>

                    </div>
                </div>
            </div>
            <p className='text-center my-5'>Copyright @{year} <span className='text-primary'> Paintgenix </span> All rights reserved</p>
        </div>
    );
};

export default Footer;