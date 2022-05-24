import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaUserEdit } from 'react-icons/fa';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(null);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {

    }
    return (
        <div>
            <div className='mt-5 pl-4 text-center lg:text-left'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL} alt='' />
                    </div>
                </div>
                <div className='my-5'>
                    <h2 className='text-3xl text-blue-900 font-bold'>{user?.displayName}</h2>
                    <h4>{user?.email}</h4>
                    <button onClick={() => setEdit(user)} className="btn btn-primary my-4 px-4"><FaUserEdit className='mr-2 text-xl'></FaUserEdit> Edit Profile</button>
                </div>
            </div>
            {
                edit && <div>
                    <div>
                        <h2 className='text-2xl font-bold'>Edit your Profile!!!!</h2>
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
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'address is required'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
                                        {...register("phn", {
                                            required: {
                                                value: true,
                                                message: 'Provide your phn no.'
                                            }
                                        })} />

                                    <label className="label">
                                        {errors.phn?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phn.message}</span>}
                                    </label>

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <label className="label">
                                        <span className="label-text">LinkedIn Link</span>
                                    </label>
                                    <input type="text" placeholder="Enter your linkedIn link" className="input input-bordered w-full max-w-xs"
                                        {...register("phn")} />

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
                </div>
            }
        </div>
    );
};

export default MyProfile;