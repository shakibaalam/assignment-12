import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Feature from './Feature';
import Product from './Product';

const ProductSection = () => {
    const [products] = useProducts();
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-scrubland-72081.herokuapp.com/featured')
            .then(res => res.json())
            .then(data => setFeatured(data))
    }, []);
    return (
        <div className='lg:mx-32 mt-32'>
            <div className='flex  gap-5'>
                <div className='lg:flex-none w-40 hidden lg:block lg:mr-10'>
                    <div>
                        <h1 className='bg-secondary pl-5 py-2 text-white hover:text-primary rounded'>Category</h1>
                        <div >
                            <p className='hover:text-primary cursor-pointer mt-5'>Paint Tools</p>
                            <p className='hover:text-primary cursor-pointer mt-5'>Paint Brush</p>
                            <p className='hover:text-primary cursor-pointer mt-5'>Paint Roller</p>
                            <p className='hover:text-primary cursor-pointer mt-5'>Chalk & Wax Paint Brush</p>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <h1 className='bg-secondary pl-5 py-2 text-white hover:text-primary rounded'>Featured Products</h1>

                        <div className='mt-5'>
                            {
                                featured.map(feature => <Feature
                                    key={feature._id}
                                    feature={feature}
                                ></Feature>)
                            }
                        </div>

                    </div>
                </div>
                <div className='lg:flex-auto base-100'>
                    <div>
                        <h3 className='font-bold text-3xl mb-3 text-primary font-serif'>Products</h3>
                        <hr />
                        <div className='mt-10 grid grid-rows-1 gap-5'>
                            {
                                products.slice(0, 4).map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;