import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ "background-image": "url(https://media.istockphoto.com/photos/paint-roller-picture-id104280159?k=20&m=104280159&s=612x612&w=0&h=cX1Wz08-2ItF_XSVgj0a04WU6feil6OI3Gw0Ep1cdwc=)" }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">MANUFACTURER OF PREMIUM QUALITY PAINT ROLLERS & APPLICATORS</h1>
                        <button class="btn btn-primary px-10">Look for Dealer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;