/* eslint-disable @typescript-eslint/no-explicit-any */

import { useYourOrderQuery } from "../../redux/features/order/Order.Api";
import { useAppSelector } from "../../redux/hooks";
import { Table, TableColumnsType } from "antd";

const CustomerOrders = () => {
  interface DataType {
    key: string;
    email: string;
    productId: string;
    quantity: number;
    status: string;
    totalPrice: number;
    transactionStatus: string;
  }

  // Get user from Redux store
  const user: any = useAppSelector((state) => state.auth.user);

  // Fetch order data
  const {
    data: ProductsData,
    isFetching,
    error,
  } = useYourOrderQuery(user?.userId, { skip: !user?.userId });

  // Handle case where the user is not logged in
  if (!user?.userId) {
    return (
      <div className="text-center text-red-500">
        Please log in to view your orders.
      </div>
    );
  }

  // Handle loading and error states
  if (isFetching) {
    return <div className="text-center">Loading orders...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Failed to fetch orders. Please try again.
      </div>
    );
  }

  // Process the data
  const allOrders = ProductsData?.data?.map(
    ({
      email,
      product,
      quantity,
      status,
      totalPrice,
      transaction,
      _id,
    }: any) => ({
      key: _id,
      email: email || "N/A",
      productId: product || "N/A",
      quantity: quantity || 0,
      status: status || "N/A",
      totalPrice: totalPrice || 0,
      transactionStatus: transaction?.transactionStatus || "N/A",
    })
  );

  // Table columns
  const columns: TableColumnsType<DataType> = [
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Product ID", dataIndex: "productId", key: "productId" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Total Price", dataIndex: "totalPrice", key: "totalPrice" },
    {
      title: "Transaction Status",
      dataIndex: "transactionStatus",
      key: "transactionStatus",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#E0FFE7] via-[#CCFFF5] to-[#F0FFF4] h-[100%] p-4">
      <div className="overflow-x-auto">
        <Table<DataType>
          columns={columns}
          dataSource={allOrders}
          loading={isFetching}
          pagination={{ pageSize: 6 }}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default CustomerOrders;
