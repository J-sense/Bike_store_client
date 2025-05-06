import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import { NavLink } from "react-router-dom";
import defaultImage from "../../assets/images/products.jpg";
import { FiPlus } from "react-icons/fi";

const SuggestedProducts = () => {
  const { data } = useAllProductsQuery(undefined);
  const suggestedProducts: TProduct[] = data?.data?.slice(0, 4) || [];

  return (
    <div className="mt-12">
      <h3 className="text-md font-normal text-white mb-4">
        Highly Recommended Product
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {suggestedProducts.map((product) => (
          <NavLink
            key={product._id}
            to={`/details/${product._id}`}
            className="group relative block aspect-square overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Product image */}
            <img
              src={defaultImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = defaultImage;
              }}
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-[#101B1F]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              {/* Plus icon - centered and larger */}

              <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <FiPlus className="text-gray-800 text-xl" />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
