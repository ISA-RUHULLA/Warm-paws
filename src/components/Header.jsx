import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { signOut } from 'firebase/auth';
import userIcon from '../assets/blue-circle-with-white-user.jpg';

const Header = () => {
    const { user, signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut()
            .then(() => navigate('/')) // logout successful, go to homepage
            .catch(err => console.error(err));
    };

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "text-white hover:text-blue-500";

    return (
        <div className="navbar bg-gray-400 shadow-sm">
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                        <li><NavLink to="/services" className={linkClass}>Service</NavLink></li>
                        <li><NavLink to="/profile" className={linkClass}>Profile</NavLink></li>
                    </ul>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Link to='/' className="btn btn-ghost text-2xl">WarmPaws</Link>
                    <p className='text-sm'>Pet Care in Winter</p>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                    <li><NavLink to="/services" className={linkClass}>Service</NavLink></li>
                    <li><NavLink to="/profile" className={linkClass}>Profile</NavLink></li>
                </ul>
            </div>

            {/* Right side Login/Logout */}
            <div className="navbar-end">
                {user ? (
                    <div className='flex gap-2'>
                        <img src={userIcon} alt="user" className='w-10 h-10' />
                        <button onClick={handleLogout} className="btn bg-base-100">
                            Logout
                        </button>

                    </div>
                ) : (
                    <Link to="/auth/login" className="btn bg-base-100">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
