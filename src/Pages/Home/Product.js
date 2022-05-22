import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, desc, quantity, available } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{desc.slice(0, 150)}</p>
                <p>Quantity: {quantity}</p>
                <p>Available :{available}</p>
                <h3 className='font-bold text-xl'>Price :${price} /q</h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Product;