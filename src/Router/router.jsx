import {
      createBrowserRouter,
    
    } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Add_Marathon from "../pages/Add_Marathon";
import My_Apply_List from "../pages/My_Apply_List";
import My_Marathon_List from "../pages/My_Marathon_List";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import MarathonDetails from "../components/MarathonDetails";


    const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                  path: '/',
                  element: <Home></Home>,
                  
            },
            {
                  path: 'addMarathon',
                  element: <PrivateRoute><Add_Marathon></Add_Marathon></PrivateRoute>,
            },
            {
                  path: 'myApplyList',
                  element: <PrivateRoute><My_Apply_List></My_Apply_List></PrivateRoute>,
            },
            {
                  path: 'myMarathonList',
                  element: <PrivateRoute><My_Marathon_List></My_Marathon_List></PrivateRoute>,
            },
            {
                  path: 'login',
                  element:<Login></Login>
            },
            {
                  path: 'register',
                  element:<Register></Register>
            },
            {
                  path:"/marathons/:id",
                  element:<PrivateRoute>
                        path:"/marathons/:id",
                        element:<MarathonDetails></MarathonDetails>
                  </PrivateRoute>
            },
        ]
      },
    ]);

    export default router