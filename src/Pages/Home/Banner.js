import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ "backgroundImage": "url(https://media.istockphoto.com/photos/paint-roller-picture-id104280159?k=20&m=104280159&s=612x612&w=0&h=cX1Wz08-2ItF_XSVgj0a04WU6feil6OI3Gw0Ep1cdwc=)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-sm hidden lg:block">
                        <h1 className="mb-5 text-5xl font-bold">MANUFACTURER OF PREMIUM QUALITY PAINT ROLLERS & APPLICATORS</h1>
                        <button className="btn btn-primary lg:px-10">Look for Dealer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;