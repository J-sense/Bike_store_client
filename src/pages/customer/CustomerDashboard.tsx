import { Card, Row, Col, Statistic, Tag, Progress, Avatar, Table } from "antd";
import {
  ShoppingCartOutlined,
  StarFilled,
  DollarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { ColumnsType } from "antd/es/table";
const CustomerDashboard = () => {
  // Recent orders data
  const recentOrders = [
    {
      key: "1",
      orderId: "#ORD-2023-001",
      product: "Mountain Bike Pro",
      amount: 899.99,
      status: "Shipped",
      date: "2023-06-15",
    },
    {
      key: "2",
      orderId: "#ORD-2023-002",
      product: "Bike Helmet",
      amount: 59.99,
      status: "Processing",
      date: "2023-06-14",
    },
    {
      key: "3",
      orderId: "#ORD-2023-003",
      product: "Repair Kit",
      amount: 29.99,
      status: "Delivered",
      date: "2023-06-10",
    },
  ];

  interface OrderType {
    key: string;
    orderId: string;
    product: string;
    amount: number;
    status: string;
    date: string;
  }

  const orderColumns: ColumnsType<OrderType> = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      responsive: ["md"] as const,
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `$${amount.toFixed(2)}`,
      responsive: ["sm"] as const,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          icon={
            status === "Delivered" ? (
              <CheckCircleOutlined />
            ) : (
              <ClockCircleOutlined />
            )
          }
          color={
            status === "Delivered"
              ? "success"
              : status === "Shipped"
              ? "processing"
              : "warning"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ["md"] as const,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button type="link" size="small">
          View Details
        </Button>
      ),
      responsive: ["lg"] as const,
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
        My Dashboard
      </h1>

      {/* Welcome Card */}
      <Card className="mb-4 md:mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-0 shadow-sm">
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={6} md={4}>
            <Avatar
              size={{ xs: 64, sm: 72, md: 80 }}
              src="https://example.com/user.jpg"
              className="mx-auto md:mx-0"
            />
          </Col>
          <Col xs={24} sm={18} md={20}>
            <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
              Welcome back, John!
            </h2>
            <p className="text-gray-600 text-center md:text-left">
              Here's what's happening with your orders today
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <Tag icon={<ShoppingCartOutlined />} color="blue">
                3 Orders
              </Tag>
              <Tag icon={<StarFilled />} color="gold">
                Premium Member
              </Tag>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Stats Cards */}
      <Row gutter={[16, 16]} className="mb-4 md:mb-6">
        <Col xs={24} sm={8} md={8}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Total Orders"
              value={12}
              prefix={<ShoppingCartOutlined className="text-blue-500" />}
              className="text-center md:text-left"
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={8}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Loyalty Points"
              value={1250}
              prefix={<StarFilled className="text-yellow-500" />}
              suffix="pts"
              className="text-center md:text-left"
            />
          </Card>
        </Col>
        <Col xs={24} sm={8} md={8}>
          <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
            <Statistic
              title="Total Spent"
              value={3589.95}
              precision={2}
              prefix={<DollarOutlined className="text-green-500" />}
              className="text-center md:text-left"
            />
          </Card>
        </Col>
      </Row>

      {/* Order Status */}
      <Card title="Order Status" className="mb-4 md:mb-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1 gap-1 sm:gap-0">
              <span className="text-sm sm:text-base">Order #ORD-2023-001</span>
              <span className="text-sm sm:text-base">Shipped (75%)</span>
            </div>
            <Progress
              percent={75}
              status="active"
              strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
            />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1 gap-1 sm:gap-0">
              <span className="text-sm sm:text-base">Order #ORD-2023-002</span>
              <span className="text-sm sm:text-base">Processing (30%)</span>
            </div>
            <Progress percent={30} status="active" strokeColor="#108ee9" />
          </div>
        </div>
      </Card>

      {/* Recent Orders */}
      <Card
        title="Recent Orders"
        className="shadow-sm"
        extra={
          <Button type="link" size="small" className="hidden sm:inline-block">
            View All
          </Button>
        }
      >
        <Table
          columns={orderColumns}
          dataSource={recentOrders}
          pagination={false}
          size="middle"
          scroll={{ x: true }}
          className="responsive-table"
        />
        <Button type="link" block className="sm:hidden mt-2">
          View All Orders
        </Button>
      </Card>
    </div>
  );
};

export default CustomerDashboard;
