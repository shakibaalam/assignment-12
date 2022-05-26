import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();

    const stripePromise = loadStripe('pk_test_51L1WpKFIH4cz62rlYdrqvvkHLUMvzD4E4liy02Y9ksbprp6Hb0cxmbbDDP0pAarbYo8AEpo4T0gi6XInArYISIcM003UHl2AcT');

    const url = `https://sheltered-scrubland-72081.herokuapp.com/orders/${id}`;
    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='my-5 text-blue-800 text-2xl font-bold'>Please Pay for : {id}</h2>
            <div className='lg:w-1/2 mx-auto'>
                <div className="card  bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <h2 className='text-accent font-bold text-2xl'>Hello, {order.userName} from {order.address}</h2>
                        <h2 className="card-title">Pay for : {order.productName}</h2>
                        <p>Your phone number: {order.phn}</p>
                        <p>Your ordered Quantity: {order.quantity}</p>
                        <p>Price of per ordered quantity: {order.price}</p>
                        <p>Please pay total of: <span className='text-red-500 font-bold text-xl'>$ {order.price * order.quantity}</span></p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;