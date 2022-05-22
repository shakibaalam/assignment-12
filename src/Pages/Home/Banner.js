import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-500">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/mRNkfLh/painter-rolling-white-paint-over-old-orange-wall-picture-id181896311-b-1-k-20-m-181896311-s-170667a.jpg" className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" alt='' />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs btn-primary">1</a>
                <a href="#item2" className="btn btn-xs btn-primary">2</a>
                <a href="#item3" className="btn btn-xs btn-primary">3</a>
                <a href="#item4" className="btn btn-xs btn-primary">4</a>
            </div>
        </div>
    );
};

export default Banner;