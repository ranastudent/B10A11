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
import MarathonsPage from "../pages/MarathonsPage";
import RegistrationForm from "../components/RegistrationForm";
import Dashboard from "../pages/Dashboard";


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
                       
                        <MarathonDetails></MarathonDetails>
                  </PrivateRoute>
            },
            {
                  path:"marathonsPage",
                  element:<PrivateRoute><MarathonsPage></MarathonsPage></PrivateRoute>
            },
            {
                  path:"/register/:id",
                  element:<PrivateRoute><RegistrationForm></RegistrationForm></PrivateRoute>
            },
            {
                  path:"dashboard",
                  element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
          
        ]
      },
    ]);

    export default router