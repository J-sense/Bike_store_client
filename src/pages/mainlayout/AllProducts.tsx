import { useState } from "react";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import { Link } from "react-router-dom";
import PhForm from "../../components/form/PhForm";
// import PhInput from "../../components/form/PhInput";
import productImg from "../../assets/images/products.jpg";
import { Button, Skeleton, Empty } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import PhInput from "../../components/form/PhInput";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, error, isLoading } = useAllProductsQuery({ searchTerm });

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    setSearchTerm(formData.searchTerm || "");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#101B1F] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Our <span className="text-[#D2B78B]">Premium</span>{" "}
            Collection
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Explore high-performance bicycles crafted for enthusiasts and
            professionals alike.
          </p>

          <div className="max-w-2xl mx-auto">
            <PhForm onSubmit={onSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="searchTerm"
                  className="block text-sm font-medium text-gray-700"
                >
                  Search products
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400">
                    <FiSearch size={20} />
                  </div>
                  <PhInput
                    type="text"
                    name="searchTerm"
                    label=""
                    // id="searchTerm"
                    // label="Model, brand or feature..."
                    className="w-full pl-12 pr-32 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#D2B78B]/50 focus:border-[#D2B78B]"
                  />
                  <Button
                    htmlType="submit"
                    className="absolute right-2 bg-[#D2B78B] hover:bg-[#c0a57a] text-[#101B1F] border-0 rounded-full px-5 h-8 font-medium transition-colors text-sm"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </PhForm>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <Skeleton.Image active className="w-full h-60" />
                <div className="p-6">
                  <Skeleton active paragraph={{ rows: 2 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <div className="text-red-500 text-xl font-medium mb-2">
              Failed to load products
            </div>
            <p className="text-gray-600">
              Please try again later or check your connection
            </p>
            <Button
              type="primary"
              className="mt-4 bg-[#D2B78B] hover:bg-[#c0a57a] text-[#101B1F] border-0"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        )}

        {/* Product List */}
        {!isLoading && !error && (
          <>
            {data?.data?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {data.data.map((item: TProduct) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={productImg}
                        alt={item.name}
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-[#D2B78B] text-[#101B1F] px-3 py-1 rounded-full text-xs font-bold">
                        New
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {item.name}
                        </h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {item.brand || "Premium"}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-[#D2B78B]">
                          ${item.price}
                        </span>
                        <Link
                          to={`/details/${item._id}`}
                          className="flex items-center text-sm font-medium text-[#101B1F] hover:text-[#D2B78B] transition-colors"
                        >
                          View Details <FiArrowRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 bg-white rounded-2xl shadow-sm">
                <Empty
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                  description={
                    <span className="text-gray-600">
                      No products found. Try a different search term.
                    </span>
                  }
                >
                  <Button
                    type="primary"
                    className="bg-[#D2B78B] hover:bg-[#c0a57a] text-[#101B1F] border-0"
                    onClick={() => setSearchTerm("")}
                  >
                    Clear Search
                  </Button>
                </Empty>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
