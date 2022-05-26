import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AllOrder = () => {
    const navigate = useNavigate();
    const [cancel, setCancel] = useState(null);
    // const [pending, setPending] = useState('');

    //get all orders
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://sheltered-scrubland-72081.herokuapp.com/allorders`, {
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

    if (isLoading) {
        return <Loading></Loading>
    }

    const cancelOrder = (id) => {
        fetch(`https://sheltered-scrubland-72081.herokuapp.com/allOrders/${id}?email=${cancel?.email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${cancel?.email} order for ${cancel.productName} is cancel`);
                    setCancel(null)
                }
                refetch();
            })
    }

    const handlePending = order => {
        fetch(`https://sheltered-scrubland-72081.herokuapp.com/allOrders/${order._id}?email=${order?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount) {
                    refetch()
                    // setPending(order?.status)
                }

            })
    }
    return (
        <div>
            <h2 className='text-3xl text-blue-900 font-bold'>There are {orders.length} {orders.length === 1 ? 'order' : 'orders'}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>User</th>
                            <th>Action</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.productName.slice(0, 20)}</td>
                                <td>{order.quantity}</td>
                                <td>{order.email}</td>
                                <td>{!order.paid && <label htmlFor="cancel-confirm" onClick={() => setCancel(order)} className="btn btn-xs text-white modal-button">Cancel </label>}
                                </td>
                                <td>{order.address}</td>
                                <td>
                                    {order?.paid ?
                                        <button onClick={() => handlePending(order)} className='btn btn-xs btn-success text-white'>{order?.status ? order?.status : 'pending'}</button>
                                        :
                                        <button className='btn btn-error btn-xs text-white'>UnPaid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

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

export default AllOrder;