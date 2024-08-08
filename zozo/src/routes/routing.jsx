import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/login/login";
import Register from "../components/register/Registration";
import Home from "../components/Home/Home";
import ForgotPassword from "../components/forgotPass/forgotPass";
import ProfileComponent from "../components/ProfileSection/profileDetails"; // Adjust the import path as necessary

const ReactRouting = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/profile",
      element: <ProfileComponent />, 
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRouting;
