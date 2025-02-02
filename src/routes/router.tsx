import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/mainlayout/Home";

// import { adminRoutes } from "./admin.routes";
import adminRouteGeneretor from "../utils/adminRouteGeneretor";
import { adminPaths } from "./admin.routes";
import { customerPaths } from "./customer.routes";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import AllProducts from "../pages/mainlayout/AllProducts";
import ViewDetails from "../components/ui/ViewDetails";
import AboutUs from "../pages/mainlayout/AboutUs";
import ContactUs from "../pages/mainlayout/ContactUs";
import Chekout from "../components/ui/Chekout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "details/:id",
        element: <ViewDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Chekout />,
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: adminRouteGeneretor(adminPaths),
  },
  {
    path: "/customer",
    element: <DashboardLayout />,
    children: adminRouteGeneretor(customerPaths),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
]);
export default router;
