import PhForm from "../../components/form/PhForm";
import { Button, Col, Row } from "antd";
import PhInput from "../../components/form/PhInput";

import { useCreateProductsMutation } from "../../redux/features/products/Products.Api";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../components/form/PhSelect";
const productCategory = ["Mountain", "Road", "Hybrid", "Electric"];
const selectOption = productCategory?.map((item) => ({
  value: item,
  label: item,
}));

const CreateProducts = () => {
  const [createProducts] = useCreateProductsMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const inStock: boolean = true;
    const productInfo = {
      name: data.name,
      brand: data.brand,
      price: data.price,
      category: data.category,
      description: data.description,
      quantity: data.quantity,
      inStock,
    };
    console.log(productInfo);
    try {
      await createProducts(productInfo).unwrap();

      toast.success("Product created successfully");
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={20} lg={16}>
        <PhForm onSubmit={onSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <PhInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24}>
              <PhInput type="text" name="brand" label="Brand" />
            </Col>
            <Col span={24}>
              <PhInput type="number" name="price" label="Price" />
            </Col>
            <Col span={24}>
              <PhSelect
                name="category"
                label="Category"
                options={selectOption}
              />
            </Col>
            <Col span={24}>
              <PhInput type="text" name="description" label="Description" />
            </Col>
            <Col span={24}>
              <PhInput type="number" name="quantity" label="Quantity" />
            </Col>
            <Col span={24}>
              <Button htmlType="submit">Submit</Button>
            </Col>
          </Row>
        </PhForm>
      </Col>
    </Row>
  );
};

export default CreateProducts;
