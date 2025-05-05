import { NavLink, useParams } from "react-router-dom";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import productImg from "../../assets/images/products.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useAllProductsQuery(undefined);

  // Find the product by ID
  const product: TProduct | undefined = data?.data?.find(
    (item: TProduct) => item._id === id
  );

  // Handle Add to Cart
  const handleCart = (selectedProduct: TProduct | undefined) => {
    if (!selectedProduct) return;

    // Dispatch to Redux with required fields
    dispatch(
      addToCart({
        id: selectedProduct._id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1, // Default to 1 when adding to cart
        image: productImg,
      }),
      toast("product added to the cart successfully")
    );
  };

  return (
    <div className="min-h-screen my-32 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <NavLink
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
              >
                <svg
                  className="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-700 md:ml-2">
                  {product?.category || "Product"}
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {product?.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
              <img
                src={productImg}
                alt={product?.name}
                className="object-contain w-full h-96 rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              {/* Product Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product?.name}
                </h1>
                <div className="flex items-center mb-4">
                  <span className="text-gray-500 text-sm">
                    SKU: {product?._id?.slice(0, 8)}
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  ${product?.price}
                </span>
                {product?.inStock ? (
                  <span className="ml-3 px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    In Stock ({product?.quantity} available)
                  </span>
                ) : (
                  <span className="ml-3 px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-600 mb-6">{product?.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Brand</h4>
                    <p className="text-gray-900">{product?.brand || "N/A"}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Category
                    </h4>
                    <p className="text-gray-900">
                      {product?.category || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleCart(product)}
                  disabled={!product?.inStock}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex-1 ${
                    product?.inStock
                      ? "bg-zinc-600 text-white hover:bg-zinc-800"
                      : "bg-gray-00 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Add to Cart
                </button>

                <NavLink
                  to="/checkout"
                  onClick={() => handleCart(product)}
                  className={`px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex-1 ${
                    product?.inStock
                      ? "bg-lime-600 text-white hover:bg-lime-900"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
