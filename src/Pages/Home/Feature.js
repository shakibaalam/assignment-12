import React from 'react';

const Feature = ({ feature }) => {
    const { name, img } = feature
    return (
        <div className='text-center'>
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src={img} alt='' />
                </div>
            </div>
            <h2>{name}</h2>
        </div>
    );
};

export default Feature;