/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";
import { Logo } from "./logo/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const role = (
    user as {
      role: any;
      email?: string;
    }
  )?.role;
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101B1F]/95 backdrop-blur-md shadow-xl border-b border-gray-800/50"
          : "bg-[#101B1F] border-b border-gray-800"
      }`}
    >
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Tagline (Desktop) */}
          <p className="hidden md:block text-sm font-medium text-gray-300 tracking-wide">
            What are you looking for <span className="text-yellow-400">?</span>
          </p>

          {/* Logo (Centered) */}
          <NavLink
            to="/"
            className="mx-auto md:mx-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
          >
            <Logo />
          </NavLink>

          {/* Desktop Auth Buttons and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <NavLink
              to="/checkout"
              className="relative p-2 hover:text-yellow-400 transition-all group"
            >
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  {cartItemCount}
                </span>
              )}
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to={`${role}/dashboard`}
                  className="px-3 py-1.5 text-sm font-medium rounded-md text-slate-400 hover:bg-gray-800/50 hover:text-yellow-400 transition-all"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition-all shadow hover:shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 border text-white border-gray-400 hover:border-yellow-400 rounded-md text-sm font-medium hover:text-yellow-400 transition-all"
              >
                Log in
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-800/50 text-gray-300 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex justify-center items-center space-x-10 py-2 border-t border-gray-800/50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-1 py-3 text-sm font-medium hover:text-yellow-400 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
              isActive ? "text-yellow-400 after:scale-x-100" : "text-gray-300"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-products"
          className={({ isActive }) =>
            `px-1 py-3 text-sm font-medium hover:text-yellow-400 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
              isActive ? "text-yellow-400 after:scale-x-100" : "text-gray-300"
            }`
          }
        >
          All Products
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `px-1 py-3 text-sm font-medium hover:text-yellow-400 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
              isActive ? "text-yellow-400 after:scale-x-100" : "text-gray-300"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            `px-1 py-3 text-sm font-medium hover:text-yellow-400 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
              isActive ? "text-yellow-400 after:scale-x-100" : "text-gray-300"
            }`
          }
        >
          Contact
        </NavLink>
        {user && (
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `px-1 py-3 text-sm font-medium hover:text-yellow-400 transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                isActive ? "text-yellow-400 after:scale-x-100" : "text-gray-300"
              }`
            }
          >
            Checkout
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#101B1F] bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 pt-16">
          {/* Navigation Links */}
          <NavLink
            to="/"
            onClick={toggleMenu}
            className="text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-products"
            onClick={toggleMenu}
            className="text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            All Products
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={toggleMenu}
            className="text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={toggleMenu}
            className="text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Contact
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/checkout"
                onClick={toggleMenu}
                className="text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Checkout
              </NavLink>
              <NavLink
                to="/cart"
                onClick={toggleMenu}
                className="flex items-center text-2xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-yellow-400 text-black text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center transform hover:scale-110 transition-transform">
                    {cartItemCount}
                  </span>
                )}
              </NavLink>
            </>
          )}

          {/* Auth Section */}
          <div className="border-t border-gray-700/50 pt-6 mt-4 w-64 text-center">
            {user ? (
              <>
                <NavLink
                  to={`${role}/dashboard`}
                  onClick={toggleMenu}
                  className="block text-xl font-medium text-gray-300 hover:text-yellow-400 transition-all py-3"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full max-w-xs mx-auto mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-all shadow hover:shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="inline-block text-white  px-8 py-3 border border-gray-400 hover:border-yellow-400 rounded-lg text-xl font-medium hover:text-yellow-400 transition-all"
              >
                Log in
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
