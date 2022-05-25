import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaUserEdit } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [edit, setEdit] = useState(null);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: mongoUser, isLoading, refetch } = useQuery(['mongoUser', user?.email], () => fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(mongoUser);

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
                const img = result.data.url;
                const userInfo = {
                    name: data.name,
                    email: mongoUser?.email,
                    address: data.address,
                    phone: data.phn,
                    LinkedIn: data.link,
                    photoURL: img,
                    education: data.education
                }
                fetch(`http://localhost:5000/user/${user?.email}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(inserted => {
                        console.log(inserted);
                        if (inserted.modifiedCount) {
                            toast.success('successfully updated')
                            refetch()
                            setEdit(null)
                        }
                    });
            })
    }
    return (
        <div className='lg:flex'>
            <div className='mt-5 pl-4 text-center lg:text-left lg:flex-1'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={mongoUser?.photoURL} alt='' />
                    </div>
                </div>
                <div className='my-5'>
                    <h2 className='text-3xl text-blue-900 font-bold'>{mongoUser?.name ? mongoUser?.name : user?.displayName} <span className='text-lg text-secondary'>({mongoUser?.role ? mongoUser?.role : 'user'})</span></h2>
                    <h4>{mongoUser?.email}</h4>
                    <p className='mt-2'>Education: {mongoUser?.education}</p>
                    <p className='mt-2'>Address: {mongoUser?.address}</p>
                    <p className='mt-2'>Phn no: {mongoUser?.phone}</p>
                    <p className='mt-2'>LinkedIn link: {mongoUser?.LinkedIn}</p>
                    <button onClick={() => setEdit(mongoUser)} className="btn btn-primary my-4 px-4"><FaUserEdit className='mr-2 text-xl'></FaUserEdit> Edit Profile</button>
                </div>
            </div>
            {
                edit && <div className='lg:flex-1'>
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
                                    <input type="text" placeholder="Enter your address" className="input input-bordered w-full max-w-xs"
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
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input type="text" placeholder="Enter your education qualification" className="input input-bordered w-full max-w-xs"
                                        {...register("education")} />

                                </div>
                                <div className="form-control w-full max-w-xs text-center">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" placeholder="Enter your phone number" className="input input-bordered w-full max-w-xs"
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
                                        {...register("link")} />

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