import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const reverseReviews = [...data].reverse()
                setReviews(reverseReviews)
            })
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center my-10 font-serif text-blue-900 font-bold'>Our Client Reviews</h2>
            <div className="carousel carousel-center w-full p-20 bg-slate-300 space-x-32 text-blue-900  rounded-box">
                {
                    reviews.map(review => <div key={review._id} className="carousel-item">
                        <div className='mb-5'>
                            <div className="avatar mb-3 ">
                                <div className="w-8 rounded-full">
                                    <img src={review?.img} alt='' />
                                </div>
                            </div>
                            <h2 className="card-title">{review.name}</h2>
                            <p className='mb-3'>{review.email}</p>
                            <p className='font-bold'> {review.review}</p>
                            <p className='font-bold'>Rating : <span className='text-primary text-lg'>{review.rating}</span></p>

                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default ReviewSection;