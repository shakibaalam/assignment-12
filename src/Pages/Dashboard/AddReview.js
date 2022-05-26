import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const reviewRef = useRef('');
    const ratingRef = useRef('');

    const handleReview = e => {
        e.preventDefault();
        const email = user.email;
        const name = user.displayName;
        const img = user.photoURL
        const review = reviewRef.current.value;
        const rating = ratingRef.current.value;
        const reviewInfo = { email, review, rating, name, img };
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted);
                if (inserted.insertedId) {
                    toast.success('Thank you for your review')
                    e.target.reset()
                }
            });
    }
    return (
        <div className='lg:w-1/2 mx-auto'>
            <h2 className=' my-6 text-3xl font-semibold text-blue-900'>Please add review on our website</h2>

            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex mb-5'>
                        <div className='flex-1'>
                            <h2 className="card-title">{user.displayName}</h2>
                            <p>{user.email}</p>
                        </div>
                        <div className="avatar flex-1 justify-end">
                            <div className="w-8 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleReview}>

                            <textarea ref={reviewRef} required className="textarea textarea-bordered w-full max-w-xs" placeholder="Put your review"></textarea>

                            <input ref={ratingRef} required type="number" placeholder="rate us out of 5" className="input input-bordered w-full max-w-xs" />

                            <div className="card-actions justify-end">
                                <input className="btn btn-xs btn-primary mt-6" type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;