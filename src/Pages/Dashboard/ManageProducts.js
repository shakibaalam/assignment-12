import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const [deleteOrder, setDeleteOrder] = useState(null)

    const handleDelete = id => {
        fetch(`https://sheltered-scrubland-72081.herokuapp.com/products/${id}`, {
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
                    setDeleteOrder(null)
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
                                        <label for="delete-confirm" onClick={() => setDeleteOrder(product)} className="btn btn-xs text-white btn-error modal-button">X</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <div>
                    <input type="checkbox" id="delete-confirm" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure for cancel order  :{deleteOrder.productName} </h3>
                            <p className="py-4">Are you sure!</p>
                            <div className="modal-action">
                                <button onClick={() => handleDelete(deleteOrder._id)} className="btn btn-xs text-white btn-error">Yes</button>
                                <label for="delete-confirm" className="btn btn-xs text-white">No</label>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>

    );
};

export default ManageProducts;