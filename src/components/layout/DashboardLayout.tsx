import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DHeader from "./DashboradNavbar";
import { Content } from "antd/es/layout/layout";

const DashboardLayout: React.FC = () => {
  return (
    <Layout className="bg-gray-100 min-h-screen md:pl-[250px] pl-0 relative">
      {/* Sidebar (hidden on small screens) */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-[250px] z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <Layout className="bg-gray-100">
        <DHeader />
        <Content className="p-4 md:p-6">
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 min-h-[80vh]">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
