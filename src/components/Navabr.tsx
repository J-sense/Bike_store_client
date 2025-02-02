import { useState } from "react";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo3.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
    setIsMenuOpen(false); // Close menu after logout
  };

  return (
    <div className="bg-[#101B1F] md:h-[150px] h-[100px] text-white font-sans">
      <div className="flex justify-between items-center mx-4 md:mx-10 py-2">
        {/* Left Side: Tagline */}
        <h1 className="md:text-lg text-sm">
          What are you looking for <small className="text-yellow-400">?</small>
        </h1>

        {/* Logo */}
        <NavLink to="/" className="md:mr-40">
          <img src={logo} alt="Logo" className="h-16 md:h-24" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop User Section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <NavLink to="/dashboard">
                <FaRegUser className="text-xl cursor-pointer" />
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">
              <button className="px-7 rounded border py-1 text-amber-100">
                Log in
              </button>
            </NavLink>
          )}
        </div>
      </div>

      <hr className="text-zinc-600 mb-2" />

      {/* Navigation Menu for Large Screens */}
      <nav className="hidden md:flex justify-center items-center gap-5">
        <NavLink to="/" className="hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/all-products" className="hover:text-gray-300">
          All Products
        </NavLink>
        <NavLink to="/about-us" className="hover:text-gray-300">
          About Us
        </NavLink>
        <NavLink to="/contact-us" className="hover:text-gray-300">
          Contact
        </NavLink>
        {/* <NavLink to="/checkout" className="hover:text-gray-300">
          Checkout
        </NavLink> */}
        {user && (
          <NavLink to="/checkout" className="hover:text-gray-300">
            Checkout
          </NavLink>
        )}
        {user && (
          <NavLink to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </NavLink>
        )}
      </nav>

      {/* Mobile Menu - Centered in the middle of the page */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#101B1F] fixed inset-0 flex flex-col justify-center items-center gap-6">
          <NavLink to="/" className="text-white text-xl" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink
            to="/all-products"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            All Products
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-white text-xl"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          {user && (
            <NavLink to="/checkout" className="hover:text-gray-300">
              Checkout
            </NavLink>
          )}

          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className="text-white text-xl"
                onClick={toggleMenu}
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 rounded text-white text-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="text-white text-xl"
              onClick={toggleMenu}
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
