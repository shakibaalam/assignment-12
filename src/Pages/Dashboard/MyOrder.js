import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { data: orders, isLoading } = useQuery(['orders', user?.email], () => fetch(`http://localhost:5000/orders?email=${user?.email}`, {
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
    console.log(orders);
    if (isLoading) {
        return <Loading></Loading>
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
                                    <th>Address</th>
                                    <th>Phn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) => <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{order.productName.slice(0, 20)}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.price}</td>
                                        <td>{order.address}</td>
                                        <td>{order.phn}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyOrder;