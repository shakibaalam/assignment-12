import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product] = useProductDetail(id);
    const { name, img, price, desc, quantity, available, _id } = product;
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: "onChange" });

    const onSubmit = data => {
        const order = {
            userName: user?.displayName,
            email: user?.email,
            productName: name,
            productImg: img,
            address: data.address,
            phn: data.phn,
            price: price,
            quantity: data.quantity
        }
        console.log(order);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Your order for ${name} is successfully done`)
                reset();

            });
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card  bg-base-100 shadow-xl">
                            <div className='card-body font-bold text-blue-900'>
                                <h2 className='text-3xl'>{user?.displayName}</h2>
                                <h3 className='text-xl'>{user?.email}</h3>
                            </div>
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
                                            <input type="text" value={name} className="input input-bordered w-full max-w-xs"
                                                {...register("name")} />

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Image</span>
                                            </label>
                                            <input type="text" value={img} className="input input-bordered w-full max-w-xs"
                                                {...register("img")} />
                                        </div>

                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input type="text" placeholder='Place your address' className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'address is required'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors?.address?.type === 'required' && <span className="label-text-alt text-red-600 ">{errors?.address.message}</span>}
                                            </label>

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Phone number</span>
                                            </label>
                                            <input type="number" placeholder='Place your number' className="input input-bordered w-full max-w-xs"
                                                {...register("phn", {
                                                    required: {
                                                        value: true,
                                                        message: 'phn is required'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors?.phn?.type === 'required' && <span className="label-text-alt text-red-600 ">{errors?.phn.message}</span>}
                                            </label>

                                        </div>
                                        <div className="form-control w-full max-w-xs text-center">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type='number' value={price} className="input input-bordered w-full max-w-xs"
                                                {...register("price"
                                                )} />

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