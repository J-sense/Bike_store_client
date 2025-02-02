import { Layout, Menu } from "antd";
import sidebarItemGeneretor from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { customerPaths } from "../../routes/customer.routes";
import { useAppSelector } from "../../redux/hooks";
import { TUSer } from "../../type/types";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);
  // console.log(user);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sidebarItems: any;
  switch ((user as TUSer)?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGeneretor(adminPaths, userRole.ADMIN);
      break;
    case userRole.CUSTOMER:
      sidebarItems = sidebarItemGeneretor(customerPaths, userRole.CUSTOMER);
      break;
    default:
      sidebarItems = [];
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="bg-gray-900 text-white shadow-lg"
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-bold text-lg tracking-wide uppercase shadow-md">
        BIKE STORE
      </div>

      {/* Sidebar Menu */}
      <Menu
        color="#DDD3D4"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
        className="text-sm"
      />
    </Sider>
  );
};

export default Sidebar;
