import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product] = useProductDetail(id);
    const { name, img, price, desc, quantity, available, _id } = product;
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: "onChange" });

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset()

            });
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{desc}</p>
                                <p>Minimum Order: {quantity} unit</p>
                                <p>Available Quantity: {available} unit</p>
                                <h3 className='font-bold text-xl'>Price :${price} /u</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div>
                                <h2 className='text-2xl text-accent font-bold'>Place Order!!!!</h2>
                                <div className='mt-5'>
                                    <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 justify-items-center'>

                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs"
                                                {...register("name")} />

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs"
                                                {...register("email")} />
                                        </div>

                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input type="text" placeholder='Place your address' className="input input-bordered w-full max-w-xs"
                                                {...register("address")} />

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Phone number</span>
                                            </label>
                                            <input type="number" placeholder='Place your number' className="input input-bordered w-full max-w-xs"
                                                {...register("phn")} />

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Quantity</span>
                                            </label>
                                            <input type='number' placeholder='Place amount of quantity' className="input input-bordered w-full max-w-xs"
                                                {...register("quantity", {
                                                    required: {
                                                        value: true,
                                                        message: 'Quantity is required'
                                                    },
                                                    min: {
                                                        value: parseInt(quantity),
                                                        message: 'Quantity should be greater than minimum'
                                                    },
                                                    max: {
                                                        value: parseInt(available),
                                                        message: 'Quantity should be less than available'
                                                    }
                                                })} />

                                            <label className="label">
                                                {errors?.quantity?.type === 'required' && <span className="label-text-alt text-red-600 ">{errors?.quantity.message}</span>}
                                            </label>
                                            <label className="label">
                                                {errors?.quantity?.type === 'min' && <span className="label-text-alt text-red-600">{errors?.quantity.message}</span>}
                                            </label>
                                            <label className="label">
                                                {errors?.quantity?.type === 'max' && <span className="label-text-alt text-red-600">{errors?.quantity.message}</span>}
                                            </label>

                                        </div>

                                        <input disabled={!isValid} className='btn btn-primary text-white uppercase font-bold  w-full max-w-xs' type="submit" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;