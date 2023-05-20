import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home/Home";
import Main from "../../layout/Main";
import Login from "../../pages/Login and Registration/Login/Login";
import Registration from "../../pages/Login and Registration/Registration/Registration";
import AddToy from "../../pages/privatePages/AddToy/AddToy";
import Blogs from "../../pages/blogs/Blogs";
import MyToys from "../../pages/privatePages/MyToys/MyToys";
import AllToys from "../../pages/All Toys/AllToys";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ViewDetails from "../../pages/home/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/all_toys",
        element: <AllToys />,
      },
      {
        path: "/view_details",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add_toys",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/my_toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
]);

export default router;
