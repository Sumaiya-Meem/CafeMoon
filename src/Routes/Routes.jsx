import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Oder/Order";

  
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
      ],
    },
  ]);