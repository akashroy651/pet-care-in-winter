// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { RouterProvider } from 'react-router'
// import router from './Routes/Router.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={router}></RouterProvider>
//   </StrictMode>,
// )



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";



import Root from './layouts/root.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Component/Home/Home.jsx';
import Services from './Component/Services/Services.jsx';
import Profile from './Component/Profile/Profile.jsx';
import ServicesDetails from './Component/ServicesDetails/ServiceDetails.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';




const router = createBrowserRouter([
  {
     
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       
      {
        index: true,
        Component: Home 
      },
      
      {
        path:'services',
        Component: Services,
      },
      {
        path: 'services/:id',
        Component: ServicesDetails,
      },
      {
        path: 'Profile',
        Component: Profile,
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <ToastContainer position="top-center" autoClose={2000} />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


