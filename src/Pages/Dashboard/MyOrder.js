import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [cancel, setCancel] = useState(null)

    const { data: orders, isLoading, refetch } = useQuery(['orders', user?.email], () => fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        // console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
        }
        return res.json()
    }));
    // console.log(orders);
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(cancel);
    const cancelOrder = (id) => {
        fetch(`http://localhost:5000/orders/${id}?email=${cancel?.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Order :${cancel.productName} is cancel`);
                    setCancel(null)
                }
                refetch();
            })
    }

    return (
        <div className='py-3'>
            {!orders.length ?
                <div>
                    <h2 className='text-lg'>Haven't order yet ?</h2>
                    <Link to='/products'> <button className="btn btn-xs btn-primary my-4 px-4 ">Order now</button></Link>
                </div>
                :
                <div>
                    <h2 className='text-3xl text-blue-900 font-bold'>{user?.displayName} you have {orders.length} {orders.length === 1 ? 'order' : 'orders'}</h2>
                    <div className="overflow-x-auto mt-5">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Drop</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{order.productName.slice(0, 20)}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.price} / u</td>
                                        <td>
                                            <label onClick={() => setCancel(order)} htmlFor="cancel-confirm" className="btn btn-xs text-white btn-error modal-button">Cancel </label>
                                        </td>
                                        <td>
                                            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-accent text-white'>Pay</button></Link>}

                                            {(order.price && order.paid) && <div className='text-success'>
                                                <p>Paid</p>
                                                <p>Transaction id: {order.transactionId}</p>
                                            </div>}
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {
                cancel && <div>
                    <input type="checkbox" id="cancel-confirm" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure for cancel order  :{cancel.productName} </h3>
                            <p className="py-4">Are you sure!</p>
                            <div className="modal-action">
                                <button onClick={() => cancelOrder(cancel._id)} className="btn btn-xs text-white btn-error">Yes</button>
                                <label for="cancel-confirm" className="btn btn-xs text-white">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyOrder;