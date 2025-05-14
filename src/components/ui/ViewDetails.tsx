import { motion } from "framer-motion";
import { Link, NavLink, useParams } from "react-router-dom";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import { TProduct } from "../../type/types";
import productImg from "../../assets/images/products.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "sonner";
import { Star, ChevronRight, ShoppingCart, Zap } from "lucide-react";
import SuggestedProducts from "./SuggestedProducts";

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useAllProductsQuery(undefined);

  const product: TProduct | undefined = data?.data?.find(
    (item: TProduct) => item._id === id
  );

  const handleCart = (selectedProduct: TProduct | undefined) => {
    if (!selectedProduct) return;

    dispatch(
      addToCart({
        id: selectedProduct._id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
        image: productImg,
      })
    );
    toast.success("Product added to cart");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Product Section */}
      <div className="bg-[#101B1F]/95 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex mb-8"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <motion.li
                variants={itemVariants}
                className="inline-flex items-center"
              >
                <NavLink
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="ml-1 text-sm font-medium text-gray-300">
                    {product?.category || "Product"}
                  </span>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="ml-1 text-sm font-medium text-white">
                    {product?.name}
                  </span>
                </div>
              </motion.li>
            </ol>
          </motion.nav>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              <motion.img
                src={productImg}
                alt={product?.name}
                className="w-full h-full object-cover"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl font-bold tracking-tight">
                  {product?.name}
                </h1>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) =>
                    i < 4 ? (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ) : (
                      <Star key={i} className="w-5 h-5 text-gray-400" />
                    )
                  )}
                  <span className="ml-2 text-sm text-gray-300">
                    (24 reviews)
                  </span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center">
                <span className="text-3xl font-bold">${product?.price}</span>
                {product?.inStock ? (
                  <span className="ml-4 px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="ml-4 px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full">
                    Out of Stock
                  </span>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-gray-300">{product?.description}</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 text-sm"
              >
                <div>
                  <p className="text-gray-400">Brand</p>
                  <p className="font-medium">{product?.brand || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-400">Category</p>
                  <p className="font-medium">{product?.category || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-400">SKU</p>
                  <p className="font-medium">{product?._id?.slice(0, 8)}</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCart(product)}
                  disabled={!product?.inStock}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    product?.inStock
                      ? "bg-white text-[#101B1F] hover:bg-gray-100"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
                <Link to="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleCart(product);
                      // Navigate programmatically or use NavLink
                    }}
                    disabled={!product?.inStock}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      product?.inStock
                        ? "bg-amber-500 text-white hover:bg-amber-600"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Zap className="w-5 h-5" />
                    Buy Now
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      <div className="bg-[#101B1F]/95 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuggestedProducts />
        </div>
      </div>
    </motion.div>
  );
};

export default ViewDetails;
