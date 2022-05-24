import React from 'react';

const UserRow = ({ user, index, refetch }) => {
    console.log(user);
    const { email } = user
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{<button className='btn btn-xs'>Admin</button>}</td>
            <td><button className='btn btn-xs'> Remove user</button></td>
        </tr>
    );
};

export default UserRow;