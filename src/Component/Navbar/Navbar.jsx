import React from "react";
import img from '../../assets/logo.png'
import { NavLink } from "react-router";
import { FaPaw } from "react-icons/fa";
import '../../Component/Navbar/Navbar.css'



const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink>
                <li>
                <a>Home</a>
              </li>
              </NavLink>
            <NavLink to="/services">
                <li>
                <a>Services</a>
              </li>
            </NavLink >
             
              <li>
                <a>My Profile</a>
              </li>
            </ul>
          </div>
         
         <NavLink to="/">
           <a className="btn btn-ghost text-xl">
            <img src={img} className="w-12 bg-amber-400" alt="" />
            <p className="text-black">Pet Care</p>
          </a>
         </NavLink>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           <NavLink to='/'><li>
            <a>
              Home
              </a>
              </li></NavLink>
           <NavLink to="/services">
                <li>
                <a>Services</a>
              </li>
            </NavLink >
           <NavLink to="/profile">
                <li>
                <a>Profile</a>
              </li>
            </NavLink >
   
             
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn"><FaPaw></FaPaw>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
