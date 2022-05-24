import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AllOrder = () => {
    const navigate = useNavigate();
    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/allorders`, {
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
                            <th>Price</th>
                            <th>User</th>
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
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.phn}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrder;