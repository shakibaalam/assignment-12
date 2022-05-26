import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = '6f08748cdf9f46113d74337c593a8f1e';

    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        desc: data.desc,
                        price: data.price,
                        img: img,
                        available: data.available,
                        quantity: data.quantity
                    }
                    fetch('https://sheltered-scrubland-72081.herokuapp.com/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('successfully added product')
                                reset();
                            }
                        });
                }
            })

    };
    return (
        <div>
            <h2 className='text-3xl text-blue-800 font-bold'>Add a new Product!!!!</h2>
            <div className='mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 gap-3 justify-items-center'>

                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="product description" className="input input-bordered  w-full max-w-xs"
                            {...register("desc", {
                                required: {
                                    value: true,
                                    message: 'description is required'
                                }
                            })} />

                        <label className="label">
                            {errors.desc?.type === 'required' && <span className="label-text-alt text-red-600">{errors.desc.message}</span>}
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="product price" className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'put product price'
                                }
                            })} />

                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <input type="number" placeholder="put minimum order quantity" className="input input-bordered w-full max-w-xs"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'required'
                                }
                            })} />

                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="available quantity" className="input input-bordered w-full max-w-xs"
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'required'
                                }
                            })} />

                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-600">{errors.available.message}</span>}
                        </label>

                    </div>


                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }
                            })} />

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                        </label>

                    </div>

                    <input className='btn  text-white uppercase font-bold  w-full max-w-xs' value='Add' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;