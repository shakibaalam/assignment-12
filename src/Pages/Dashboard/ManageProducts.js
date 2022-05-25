import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product name</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.available}</td>
                                    <td>
                                        <label onClick={() => handleDelete(product._id)} className="btn btn-xs text-white btn-error modal-button">X</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;