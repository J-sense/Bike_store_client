/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import sidebarItemGeneretor from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { customerPaths } from "../../routes/customer.routes";
import { useAppSelector } from "../../redux/hooks";
import { TUSer } from "../../type/types";
import { motion } from "framer-motion";
import { FiHome, FiShoppingCart, FiUsers, FiSettings } from "react-icons/fi";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

// Icon mapping for menu items
const menuIcons: Record<string, React.ReactNode> = {
  dashboard: <FiHome className="text-lg" />,
  products: <FiShoppingCart className="text-lg" />,
  management: <FiUsers className="text-lg" />,
  settings: <FiSettings className="text-lg" />,
  // Add more icons as needed
};

const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);

  let sidebarItems: any[];
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

  // Enhance items with icons and animations
  const enhancedSidebarItems = sidebarItems.map((item: any) => ({
    ...item,
    icon: menuIcons[item.key] || null,
    label: (
      <motion.span
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {item.label}
      </motion.span>
    ),
  }));

  return (
    <Sider
      breakpoint="xl"
      collapsedWidth="0"
      width={250}
      className="bg-[#1a2a3a] text-white shadow-xl"
      style={{
        background: "linear-gradient(195deg, #1a2a3a 0%, #0f172a 100%)",
        height: "100vh", // ⬅️ Ensure full screen height
        position: "fixed", // ⬅️ Fix it on the left
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 100, // ⬅️ Keep it above content
      }}
    >
      {/* Sidebar Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-20 flex items-center justify-center border-b border-gray-700"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            BIKE STORE
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            {(user as TUSer)?.role.toUpperCase()} PANEL
          </p>
        </div>
      </motion.div>

      {/* Sidebar Menu */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={enhancedSidebarItems}
        className="px-2 py-4"
        style={{
          background: "transparent",
          borderRight: "none",
        }}
      />

      {/* Sidebar Footer */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span>v1.0.0</span>
          <span>© 2025</span>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
