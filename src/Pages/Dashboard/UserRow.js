import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch, setDeleteUser }) => {
    const { email, role } = user;
    const createAdmin = () => {
        fetch(`https://sheltered-scrubland-72081.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success('successfully made admin')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={createAdmin} className='btn btn-xs'>Admin</button>}</td>
            <td>
                <label onClick={() => setDeleteUser(user)} for="delete-confirm" className="btn btn-xs text-white btn-error modal-button">Remove </label>
            </td>
        </tr>
    );
};

export default UserRow;