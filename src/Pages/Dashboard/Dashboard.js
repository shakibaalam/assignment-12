import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mx-10 my-3">

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                        <li className='hover:text-primary'><Link to='/dashboard'>My Profile</Link></li>
                        {
                            !admin && <>
                                <li><Link to='/dashboard/myOrder'>My order</Link></li>
                                <li><Link to='/dashboard/review'>Add Review</Link></li>
                            </>
                        }
                        {
                            admin && <>
                                <li><Link to='/dashboard/manage'>Manage users</Link></li>
                                <li><Link to='/dashboard/allOrder'>All orders</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add product</Link></li>
                                <li><Link to='/dashboard/manageProducts'>Manage products</Link></li>
                            </>

                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;