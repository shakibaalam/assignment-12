import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteUser from './DeleteUser';
import UserRow from './UserRow';

const ManageUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://sheltered-scrubland-72081.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='mb-5 text-blue-900 font-bold text-2xl'>All users are: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={index}
                                refetch={refetch}
                                user={user}
                                index={index}
                                setDeleteUser={setDeleteUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && <DeleteUser
                    deleteUser={deleteUser}
                    setDeleteUser={setDeleteUser}
                    refetch={refetch}
                ></DeleteUser>
            }
        </div>
    );
};

export default ManageUsers;