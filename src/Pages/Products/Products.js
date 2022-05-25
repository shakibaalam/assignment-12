import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const navigateProduct = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className='mt-5 lg:mx-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    products.map(product =>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{product.name}</h2>
                                <p>{product.desc}</p>
                                <div class="card-actions justify-end">
                                    <button onClick={() => navigateProduct(product._id)} className="btn btn-primary hover:btn-secondary">Purchase</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Products;