import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, price, desc, quantity, available } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                <p>{desc.slice(0, 150)}</p>
                <p>Minimum Order: {quantity} unit</p>
                <p>Available Quantity: {available} unit</p>
                <h3 className='font-bold text-xl'>Price :${price} /u</h3>
                <div className="card-actions justify-end">
                    <Link to='/purchase'><button className="btn btn-primary hover:btn-secondary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;