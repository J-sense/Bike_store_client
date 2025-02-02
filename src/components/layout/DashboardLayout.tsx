import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const DashboardLayout: React.FC = () => {
  return (
    <Layout className="h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <Layout className="bg-gray-100">
        {/* Header with Custom Color */}
        <Header className=" shadow-md px-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Bike Shop Dashboard
          </h2>
        </Header>

        {/* Content Section */}
        <Content className="p-4 md:p-6">
          <div className="bg-white shadow-md rounded-lg p-6 min-h-[80vh]">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
