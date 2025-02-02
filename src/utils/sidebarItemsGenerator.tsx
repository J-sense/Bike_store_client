import { NavLink } from "react-router-dom";
import { TReouteItems } from "./adminRouteGeneretor";
import { TSidebarItems } from "../routes/admin.routes";

const sidebarItemGeneretor = (items: TReouteItems[], role: string) => {
  const adminSidebar = items.reduce((acc: TSidebarItems[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          // label: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebar;
};
export default sidebarItemGeneretor;
