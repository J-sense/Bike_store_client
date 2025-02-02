/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useYourOrderQuery } from "../../redux/features/order/Order.Api";
import { useAppSelector } from "../../redux/hooks";
import { Button, Table, TableColumnsType } from "antd";
import { TProduct } from "../../type/types";

const CustomerOrders = () => {
  interface DataType {
    key: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
  }
  const user: any = useAppSelector((state) => state.auth.user);
  console.log(user);
  const { data: orderData, isFetching } = useYourOrderQuery(user.userId);
  console.log(orderData);
  const allProducts = orderData?.data?.map(
    ({ brand, category, name, price, quantity, _id }: TProduct) => ({
      key: _id,
      name,
      category,
      brand,
      quantity,
      price,
    })
  );
  const columns: TableColumnsType<DataType> = [
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Price", dataIndex: "price", key: "price", responsive: ["md"] },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      responsive: ["lg"],
    },
    {
      title: "Stock",
      key: "stock",
      render: (item) =>
        item.quantity > 0 ? (
          <Button type="primary" className="bg-green-500 border-none">
            In Stock
          </Button>
        ) : (
          <Button type="default" disabled>
            Out of Stock
          </Button>
        ),
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#E0FFE7] via-[#CCFFF5] to-[#F0FFF4] h-[100%] ">
      <div className="overflow-x-auto">
        <Table<DataType>
          columns={columns}
          dataSource={allProducts}
          loading={isFetching}
          pagination={{ pageSize: 6 }}
          scroll={{ x: "max-content" }}
        />
      </div>

      {/* Update Modal */}
    </div>
  );
};

export default CustomerOrders;
