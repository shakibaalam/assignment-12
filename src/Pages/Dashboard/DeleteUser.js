import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ deleteUser, setDeleteUser, refetch }) => {
    console.log(deleteUser);
    const { name, email } = deleteUser;
    const handelDelete = () => {
        fetch(`https://sheltered-scrubland-72081.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User :${name} is deleted`);
                    setDeleteUser(null)
                }
                refetch();
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete  :{name} </h3>
                    <p className="py-4">All users are important!</p>
                    <div className="modal-action">
                        <button onClick={handelDelete} className="btn btn-xs text-white btn-error">Delete</button>
                        <label for="delete-confirm" className="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;