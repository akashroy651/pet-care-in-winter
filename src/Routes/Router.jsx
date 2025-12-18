import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../layouts/HomeLayout";
import Profile from "../Component/Profile";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <div>Hello auth</div>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);


export default router;