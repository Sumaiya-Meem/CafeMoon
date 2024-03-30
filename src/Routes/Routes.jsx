import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Menu from "../Pages/MenuPage/Menu";
import Order from "../Pages/Oder/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Layout/Dashboard";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Cart from "../Pages/Dashboard/Cart/Cart";

  
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
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
  
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // admin only routes
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }

      ]
    }
  ]);