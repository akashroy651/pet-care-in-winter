// // import React, { useContext } from "react";
// import img from '../../assets/logo.png'
// import { NavLink } from "react-router-dom";
// // import { AuthContext } from "../../AuthProvider"; // ✅ Auth Context import

// import '../../Component/Navbar/Navbar.css'
// import { AuthContext } from "../../AuthProvider";
// import { useContext, useState } from 'react';

// //  login btn set

// import Login from '../Login/Login';


// const Navbar = () => {

//   // const { user, logOut } = useContext(AuthContext); // ✅ user & logout function

//   // //  login btn set
//   const [showLogin, setShowLogin] = useState(false);

  

 
  

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>

//           <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             <NavLink to="/"><li><a>Home</a></li></NavLink>
//             <NavLink to="/services"><li><a>Services</a></li></NavLink>
//             <NavLink to="/profile"><li><a>My Profile</a></li></NavLink>
//           </ul>
//         </div>

//         <NavLink to="/">
//           <a className="btn btn-ghost text-xl flex items-center gap-2">
//             <img src={img} className="w-12 bg-amber-400 rounded" alt="" />
//             <p className="text-black">Pet Care</p>
//           </a>
//         </NavLink>

//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <NavLink to="/"><li><a>Home</a></li></NavLink>
//           <NavLink to="/services"><li><a>Services</a></li></NavLink>
//           <NavLink to="/profile"><li><a>My Profile</a></li></NavLink>
//         </ul>
//       </div>

//       <div className="navbar-end gap-3">
//    <button onClick={() => setShowLogin(true)}>Login</button>

//       {/* যদি showLogin true হয়, তাহলে Login component দেখাও */}
//  {showLogin && (
//   <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//     <div className="bg-white p-6 rounded-lg min-w-[300px] relative">
//       <button
//         onClick={() => setShowLogin(false)}
//         className="absolute top-2 right-2 text-xl font-bold"
//       >
//         ✕
//       </button>

//       <Login onClose={() => setShowLogin(false)} />   {/* ✅ Modal বন্ধ controller */}
//     </div>
//   </div>
// )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;










import img from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Navbar = () => {


  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      {/* Navbar Startn*/}
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

          {/* Mobile Menu Items */}
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

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/profile"><li>My Profile</li></NavLink>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
      <GoogleLogin></GoogleLogin>
        
      </div>
 
       
      
    </div>
  );
};

export default Navbar;
