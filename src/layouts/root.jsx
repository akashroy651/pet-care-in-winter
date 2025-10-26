// import React from 'react';
// import Navbar from '../Component/Navbar';
// import { Outlet } from 'react-router';
// import Footer from '../Component/Footer';
// import Profile from '../Component/Profile';

// const HomeLayout = () => {
//     return (
//         <div>
//            <header>
//             <Navbar></Navbar>
//            </header>
//            <Outlet>
//             <Profile></Profile>
//            </Outlet>
//            <footer>
//             <Footer></Footer>
//            </footer>
//         </div>
//     );
// };

// export default HomeLayout;


















import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;