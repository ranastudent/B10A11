import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)
  const handleLogout = () => {
    logout().then(() => {
      navigate('/');
    });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='addMarathon'>Add Marathon</NavLink></li>
            <li>
              <NavLink to='myMarathonList'>My Marathon List</NavLink>
            </li>
            <li><NavLink to='myApplyList'>My Apply List</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-20 h-20 rounded-full' src="https://i.ibb.co.com/wsstjjC/marathon-logo-silhouette-sport-free-vector.jpg" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='addMarathon'>Add Marathon</NavLink></li>
          <li>
            <NavLink to='myMarathonList'>My Marathon List</NavLink>
          </li>
          <li><NavLink to='myApplyList'>My Apply List</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
                title={user.displayName}
              />
              <button onClick={handleLogout} className="btn">Logout</button>
            </div>
          </>
        ) : (
          <Link to='/login'><button className="btn">Login</button></Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
