import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  useAllProductsQuery,
  useDeleteProductsMutation,
  useUpdateProductMutation,
} from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import PhInput from "../../components/form/PhInput";
import PhForm from "../../components/form/PhForm";

const GetAllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);
  const { data: ProductsData, isFetching } = useAllProductsQuery(undefined);
  const [deleteProducts] = useDeleteProductsMutation();
  const [updateProductData] = useUpdateProductMutation();

  // Map API Data
  const allProducts = ProductsData?.data?.map(
    ({ brand, category, name, price, quantity, _id }: TProduct) => ({
      key: _id,
      name,
      category,
      brand,
      quantity,
      price,
    })
  );

  // Show Modal for Update
  const showModal = (id: string) => {
    setProductId(id);
    setIsModalOpen(true);
  };

  // Close Modal
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Update Product
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!productId) return;

    const updateProductInfo = {
      id: productId,
      data: {
        price: Number(data.price),
        quantity: Number(data.quantity),
      },
    };

    try {
      await updateProductData(updateProductInfo).unwrap();
      toast.success("Product updated successfully");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error updating product");
      console.error(error);
    }
  };

  // Delete Product
  const handleDelete = async (_id: string) => {
    try {
      await deleteProducts(_id).unwrap();
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product");
      console.error(error);
    }
  };

  interface DataType {
    key: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
  }

  // Table Columns
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
    {
      title: "Update",
      key: "update",
      render: (item) => (
        <Button type="default" onClick={() => showModal(item.key)}>
          Update
        </Button>
      ),
    },
    {
      title: "Action",
      key: "delete",
      render: (item) => (
        <Button type="primary" danger onClick={() => handleDelete(item.key)}>
          Delete
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
      <Modal
        title="Update Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PhForm onSubmit={onSubmit}>
          <PhInput type="number" name="price" label="Price" />
          <PhInput type="number" name="quantity" label="Quantity" />
          <div className="flex justify-end mt-4">
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </div>
        </PhForm>
      </Modal>
    </div>
  );
};

export default GetAllProducts;
