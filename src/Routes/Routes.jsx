import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Oder/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/menu",
          element:<Menu></Menu>,
        },
        {
          path: "order/:category",
          element:<Order></Order>,
        },
        {
          path: "/login",
          element: <Login></Login>, 
        },
        {
          path: "/registration",
          element: <Register></Register>, 
        },
      ],
    },
  ]);