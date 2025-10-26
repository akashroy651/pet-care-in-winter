// import React, { useContext } from "react";
import img from '../../assets/logo.png'
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider"; // ✅ Auth Context import

import '../../Component/Navbar/Navbar.css'
import { AuthContext } from "../../AuthProvider";
import { useContext } from 'react';


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext); // ✅ user & logout function

  const handleLogout = () => {
    logOut();
  };

  // login part

  

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink to="/"><li><a>Home</a></li></NavLink>
            <NavLink to="/services"><li><a>Services</a></li></NavLink>
            <NavLink to="/profile"><li><a>My Profile</a></li></NavLink>
          </ul>
        </div>

        <NavLink to="/">
          <a className="btn btn-ghost text-xl flex items-center gap-2">
            <img src={img} className="w-12 bg-amber-400 rounded" alt="" />
            <p className="text-black">Pet Care</p>
          </a>
        </NavLink>

      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/"><li><a>Home</a></li></NavLink>
          <NavLink to="/services"><li><a>Services</a></li></NavLink>
          <NavLink to="/profile"><li><a>My Profile</a></li></NavLink>
        </ul>
      </div>

      <div className="navbar-end gap-3">

        {user ? (
          <>
            {/* User Avatar */}
            <div className="relative group cursor-pointer">
              <img src={user.photoURL || "https://i.ibb.co/6W3tLHB/user.png"}
                className="w-10 h-10 rounded-full border" />

              <span className="absolute hidden group-hover:block bg-black text-white text-sm px-3 py-1 rounded top-11 right-0">
                {user.displayName || "User"}
              </span>
            </div>

            {/* Logout */}
            <button onClick={handleLogout} className="btn bg-red-500 text-white hover:bg-red-600">
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn"></button>
            </NavLink>

            <NavLink to="/register">
              <button className="btn btn-outline">Register</button>
            </NavLink>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
