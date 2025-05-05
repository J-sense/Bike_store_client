import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import productImg from "../../assets/images/products.jpg";
import { TProduct } from "../../type/types";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";

const HomepageSectionOne = () => {
  const { data } = useAllProductsQuery(undefined);
  const dispatch = useDispatch();
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101B1F] mb-4">
            New Arrivals
          </h2>
          <div className="w-20 h-1 bg-[#D2B78B] mx-auto"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data?.data.slice(0, 4).map((item: TProduct, index: string) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={productImg || "https://via.placeholder.com/450"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-[#101B1F] text-white px-3 py-1 rounded-full text-xs font-bold">
                  New
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-[#101B1F] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[#D2B78B] font-bold text-xl">
                    ${item.price}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center border-t border-gray-100">
                  <button
                    className="text-[#101B1F] hover:text-[#D2B78B] transition-colors"
                    onClick={() => handleCart(item)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <NavLink
                    to={`/details/${item._id}`}
                    className="px-6 py-2 bg-[#101B1F] hover:bg-[#D2B78B] text-white rounded-lg font-medium transition-colors duration-300"
                  >
                    View Details
                  </NavLink>
                  <Link to={`/details/${item._id}`}>
                    <button className="text-[#101B1F] hover:text-[#D2B78B] transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <NavLink
            to="/all-products"
            className="inline-block px-8 py-3 bg-[#D2B78B] hover:bg-[#c0a57a] text-[#101B1F] font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomepageSectionOne;
