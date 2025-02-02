import { Table, TableColumnsType } from "antd";

// import { TProduct } from "../../type/types";
import { useGetAllOrderQuery } from "../../redux/features/order/Order.Api";

const AllOrder = () => {
  interface DataType {
    key: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
  }
  //   const user: any = useAppSelector((state) => state.auth.user);
  //   console.log(user);
  type TOrder = {
    product: string;
    brand: string;
    category: string;
    email: string;
    totalPrice: number;
    transaction?: {
      transactionStatus?: string;
    };
    quantity: number;
    status: string;
  };
  const { data: orderData, isFetching } = useGetAllOrderQuery(undefined);
  console.log(orderData);
  const allProducts = orderData?.data?.map(
    ({
      brand,
      category,
      email,
      totalPrice,
      transaction,
      quantity,
      status,
      product,
    }: TOrder) => ({
      key: product,
      product,
      category,
      brand,
      quantity,
      email,
      status,
      totalPrice,
      transactionStatus: transaction?.transactionStatus || "make payment",
    })
  );
  const columns: TableColumnsType<DataType> = [
    { title: "Product Name", dataIndex: "product", key: "name" },
    { title: "Quantity", dataIndex: "quantity", key: "brand" },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "price",
      responsive: ["md"],
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      responsive: ["lg"],
    },

    {
      title: "transactionStatus",
      dataIndex: "transactionStatus",
      key: "transactionStatus",
      responsive: ["lg"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["lg"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["lg"],
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

export default AllOrder;
