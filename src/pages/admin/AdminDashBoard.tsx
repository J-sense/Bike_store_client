/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Row, Col, Statistic, Progress } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  StarOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../redux/hooks";

const AdminDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const role = (
    user as {
      role: any;
      email?: string;
    }
  )?.role;

  // const recentOrders = [
  //   {
  //     key: "1",
  //     orderId: "#ORD-2023-001",
  //     customer: "John Smith",
  //     amount: 299.99,
  //     status: "Completed",
  //     date: "2023-06-15",
  //   },
  //   {
  //     key: "2",
  //     orderId: "#ORD-2023-002",
  //     customer: "Sarah Johnson",
  //     amount: 599.99,
  //     status: "Processing",
  //     date: "2023-06-14",
  //   },
  //   {
  //     key: "3",
  //     orderId: "#ORD-2023-003",
  //     customer: "Michael Brown",
  //     amount: 199.99,
  //     status: "Pending",
  //     date: "2023-06-13",
  //   },
  // ];

  // const columns = [
  //   {
  //     title: "Order ID",
  //     dataIndex: "orderId",
  //     key: "orderId",
  //     responsive: ["md"],
  //   },
  //   {
  //     title: "Customer",
  //     dataIndex: "customer",
  //     key: "customer",
  //   },
  //   {
  //     title: "Amount",
  //     dataIndex: "amount",
  //     key: "amount",
  //     render: (amount: number) => `$${amount.toFixed(2)}`,
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //     render: (status: string) => (
  //       <Tag
  //         color={
  //           status === "Completed"
  //             ? "green"
  //             : status === "Processing"
  //             ? "blue"
  //             : "orange"
  //         }
  //       >
  //         {status}
  //       </Tag>
  //     ),
  //   },
  //   {
  //     title: "Date",
  //     dataIndex: "date",
  //     key: "date",
  //     responsive: ["md"],
  //   },
  // ];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
        {role} Dashboard
      </h1>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="mb-4 md:mb-6">
        <Col xs={24} sm={12} md={6}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Total Sales"
              value={12543}
              prefix={<DollarCircleOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
            <div className="flex items-center mt-2">
              <RiseOutlined className="text-green-500 mr-1" />
              <span className="text-xs md:text-sm text-gray-500">
                12% increase
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Total Orders"
              value={324}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
            <div className="flex items-center mt-2">
              <RiseOutlined className="text-blue-500 mr-1" />
              <span className="text-xs md:text-sm text-gray-500">
                8% increase
              </span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="New Customers"
              value={56}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#722ed1" }}
            />
            <Progress
              percent={70}
              showInfo={false}
              strokeColor="#722ed1"
              className="mt-2"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Customer Rating"
              value={4.8}
              precision={1}
              prefix={<StarOutlined />}
              valueStyle={{ color: "#faad14" }}
            />
            <div className="flex items-center mt-2">
              <FallOutlined className="text-orange-500 mr-1" />
              <span className="text-xs md:text-sm text-gray-500">
                2% decrease
              </span>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row gutter={[16, 16]} className="mb-4 md:mb-6">
        <Col xs={24} md={16}>
          <Card
            title="Sales Overview"
            extra={<LineChartOutlined />}
            className="shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div className="h-48 md:h-64 flex items-center justify-center bg-gray-100 rounded">
              <p className="text-gray-400">
                Sales chart would be displayed here
              </p>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card
            title="Revenue by Category"
            className="shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div className="space-y-4">
              {["Bikes", "Parts", "Accessories", "Service"].map(
                (item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm md:text-base">{item}</span>
                      <span className="text-sm md:text-base">
                        {25 - index * 5}%
                      </span>
                    </div>
                    <Progress
                      percent={25 - index * 5}
                      strokeColor={
                        ["#52c41a", "#1890ff", "#722ed1", "#faad14"][index]
                      }
                      showInfo={false}
                    />
                  </div>
                )
              )}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Recent Orders Table */}
      {/* <Card
        title="Recent Orders"
        className="shadow-sm hover:shadow-md transition-shadow"
      >
        <Table
          columns={columns}
          dataSource={recentOrders}
          pagination={false}
          size="middle"
          scroll={{ x: true }}
        />
      </Card> */}
    </div>
  );
};

export default AdminDashboard;
