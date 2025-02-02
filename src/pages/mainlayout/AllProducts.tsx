import { useState } from "react";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import productImg from "../../assets/images/products.jpg";
import { TProduct } from "../../type/types";
import { Link } from "react-router-dom";
import PhForm from "../../components/form/PhForm";
import PhInput from "../../components/form/PhInput";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AllProducts = () => {
  // Store search term as a string
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch products from RTK Query (pass searchTerm)
  const { data, error, isLoading } = useAllProductsQuery({ searchTerm });

  // Handle search form submission
  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData);
    setSearchTerm(formData.searchTerm || ""); // Ensure a default empty string
  };

  return (
    <>
      <div className="text-center py-16 flex flex-col items-center space-y-2">
        <h1 className="text-6xl text-gray-900 font-bold">Road Bikes</h1>
        <p className="text-base w-2/3 text-center font-semibold">
          Discover our meticulously curated selection, featuring
          high-performance models from renowned brands known for their
          craftsmanship and innovation.
        </p>

        {/* Search Input */}
        <PhForm onSubmit={onSubmit}>
          <div className="flex items-center gap-2">
            <PhInput type="text" name="searchTerm" label="" />
            <Button htmlType="submit">Search</Button>
          </div>
        </PhForm>
      </div>

      {/* Loading & Error Handling */}
      {isLoading && <div className="text-center">Loading...</div>}
      {error && (
        <div className="text-center text-red-500">Error loading products</div>
      )}

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {data?.data?.length > 0 ? (
          data.data.map((item: TProduct) => (
            <div
              key={item._id}
              className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="relative group">
                <img
                  src={productImg || "https://via.placeholder.com/450"}
                  alt={item.name}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <button className="text-white px-4 py-2 bg-amber-400 hover:bg-amber-500 rounded-md">
                    <Link to={`/details/${item._id}`}>View Details</Link>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <p className="mt-4 text-amber-600 font-bold">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 col-span-4">
            No products found.
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
