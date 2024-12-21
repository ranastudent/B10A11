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
                  element: <Add_Marathon></Add_Marathon>,
            },
            {
                  path: 'myApplyList',
                  element: <My_Apply_List></My_Apply_List>,
            },
            {
                  path: 'myMarathonList',
                  element: <My_Marathon_List></My_Marathon_List>,
            },
            {
                  path: 'login',
                  element:<Login></Login>
            },
            {
                  path: 'register',
                  element:<Register></Register>
            },
        ]
      },
    ]);

    export default router