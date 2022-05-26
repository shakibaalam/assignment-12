
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const { price, productName, email, quantity, _id } = order;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const elements = useElements();
    const stripe = useStripe();

    useEffect(() => {
        const totalPrice = price * quantity;
        // console.log(totalPrice);
        fetch('https://sheltered-scrubland-72081.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price, quantity]);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setSuccess('')
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats ! your payment is done');
            console.log(paymentIntent);
            const payment = {
                orderId: _id,
                amount: paymentIntent.amount,
                transactionId: paymentIntent.id
            };

            fetch(`https://sheltered-scrubland-72081.herokuapp.com/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data);

                })

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn btn-success btn-sm mt-5 text-white' disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {
                cardError && <p className='text-red-500 mt-3'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-success my-3'>{success}</p>
                    <p >Your transaction id : <span className='text-orange-500'>{transactionId}</span></p>
                </div>
            }

        </form>
    );
};

export default CheckoutForm;