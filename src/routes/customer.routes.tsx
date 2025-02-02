import CustomerDashboard from "../pages/customer/CustomerDashboard";
import CustomerOrders from "../pages/customer/CustomerOrders";
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
    name: "Your Profile",
    children: [
      {
        name: "Update Profile",
        path: "update-profile",
        element: <ProfileUpdating />,
      },
    ],
  },
];
