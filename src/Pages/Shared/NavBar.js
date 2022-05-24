import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const NavBar = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    if (loading) {
        return <Loading></Loading>
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li className='text-primary'><Link to='/home'>Home</Link></li>
        <li className='text-primary'><Link to='/products'>Products</Link></li>
        <li className='text-primary'><Link to='/blog'>Blog</Link></li>
        <li className='text-primary'><Link to='/review'>Reviews</Link></li>

        {
            user && <li className='text-primary'><Link to='/dashboard'>Dashboard</Link></li>
        }

        <li className='text-primary'>{user ? <Link onClick={logout} to='/login'>Sign Out</Link> : <Link to='/login'>Login</Link>}</li>

        {
            user && <li className='text-primary items-center'>{user?.displayName}</li>
        }
    </>
    return (
        <div className="navbar bg-base-200 justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className='hidden lg:block' to='/'><img width={100} src='https://i.ibb.co/y4wj5BD/small-8039-628994c2243e7.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg mr-3">
                    {menuItems}
                </ul>
            </div>
            <div className="lg:hidden navbar-end">
                <label htmlFor="sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default NavBar;