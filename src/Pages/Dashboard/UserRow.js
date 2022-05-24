import React from 'react';

const UserRow = ({ user, index, refetch, setDeleteUser }) => {
    const { email } = user
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{<button className='btn btn-xs'>Admin</button>}</td>
            <td>
                <label onClick={() => setDeleteUser(user)} for="delete-confirm" className="btn btn-xs text-white btn-error modal-button">Remove </label>
            </td>
        </tr>
    );
};

export default UserRow;