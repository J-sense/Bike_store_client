import { NavLink, useParams } from "react-router-dom";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import productImg from "../../assets/images/products.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

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
      })
    );
  };

  return (
    <div className="flex py-20 justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 md:p-10">
        {/* Product Title & ID */}
        <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
        <p className="text-gray-500 mt-2">Product ID: {product?._id}</p>

        {/* Product Image */}
        <div className="mt-6 mb-6 flex justify-center">
          <img
            src={productImg}
            alt={product?.name}
            className="object-contain w-full max-h-80 rounded-lg border border-gray-300"
          />
        </div>

        {/* Product Information */}
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Description:</strong> {product?.description}
          </p>
          <p>
            <strong>Price:</strong>{" "}
            <span className="text-green-500 font-semibold">
              ${product?.price}
            </span>
          </p>
          <p
            className={`text-sm ${
              product?.inStock ? "text-green-500" : "text-red-500"
            }`}
          >
            <strong>Status:</strong>{" "}
            {product?.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p>
            <strong>Brand:</strong> {product?.brand}
          </p>
          <p>
            <strong>Category:</strong> {product?.category}
          </p>
          <p>
            <strong>Available Quantity:</strong> {product?.quantity}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          {/* Add to Cart */}
          <button
            onClick={() => handleCart(product)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>

          {/* Buy Now */}
          <NavLink
            to="/checkout"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
            onClick={() => handleCart(product)}
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
