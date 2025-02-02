import { ReactNode } from "react";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateProducts from "../pages/admin/CreateProducts";
import GetAllProducts from "../pages/admin/GetAllProducts";
import { NavLink } from "react-router-dom";
import AllOrder from "../pages/admin/AllOrder";
// import AllProducts from "../pages/mainlayout/AllProducts";

export type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard />,
  },
  // {
  //   path: "/admin",
  //   element: <AdminDashBoard />,
  // },
  {
    name: "Order Management",
    children: [
      {
        name: "Orders",
        path: "orders",
        element: <AllOrder />,
      },
    ],
  },
  {
    name: "Product Management",
    children: [
      {
        name: "Create Product",
        path: "create-product",
        element: <CreateProducts />,
      },
      {
        name: "All Products",
        path: "all-products",
        element: <GetAllProducts />,
      },
    ],
  },
];
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.name && item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
export const adminSidebar = adminPaths.reduce((acc: TSidebarItems[], item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        // label: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []);
// const adminPath = [
//   {
//     index: true,
//     element: <AdminDashBoard />,
//   },
//   {
//     path: "create-product",
//     element: <CreateProducts />,
//   },
//   {
//     path: "all-products",
//     element: <GetAllProducts />,
//   },
// ];
// export default adminPath;
