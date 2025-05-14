import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerOrders from "../pages/customer/CustomerOrders";
import Myprofil from "../pages/customer/Profile";
import ProfileUpdating from "../pages/customer/ProfileUpdating";

export const customerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <CustomerDashboard />,
  },

  {
    name: "Orders Management",
    children: [
      {
        name: "All Orders",
        path: "orders",
        element: <CustomerOrders />,
      },
    ],
  },
  {
    name: "Profile",
    children: [
      {
        name: "My Profile",
        path: "my-profile",
        element: <Myprofil />,
      },
      {
        name: "Update Profile",
        path: "update-profile",
        element: <ProfileUpdating />,
      },
    ],
  },
];
