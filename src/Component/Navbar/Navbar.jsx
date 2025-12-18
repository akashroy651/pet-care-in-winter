

import '../../Component/Navbar/Navbar.css'
import img from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';


const Navbar = () => {
   

    const { user,  logOut } = useContext(AuthContext);
    console.log('user check', user)
 
    const handleLogOut = ()  => {
      logOut()
      .then(() => {
        console.log('LogOut Successfully')
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 ">
      
      {/* Navbar*/}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Menu Items */}
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/services"><li>Services</li></NavLink>
            <NavLink to="/profile"><li>My Profile</li></NavLink>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 btn btn-ghost text-xl">
          <img src={img} className="w-12 bg-amber-400 rounded" alt="logo" />
          <p className="text-black">Pet Care</p>
        </NavLink>
      </div>

      {/* Navbar  Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/profile"><li>My Profile</li></NavLink>
        </ul>
      </div>

      {/* Navbar login button */}
      <div className="navbar-end">
        
        {
          user ? 
            <button onClick={handleLogOut} className='btn'>Logout</button>
            :
            <Link to="/login">
            <button className=" btn">Login</button>
            </Link>
            
        }
    
      </div>
 
       
      
    </div>
  );
};

export default Navbar;
