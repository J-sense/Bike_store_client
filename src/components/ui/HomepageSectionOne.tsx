// import React, { useState } from "react";
import { useAllProductsQuery } from "../../redux/features/products/Products.Api";
import productImg from "../../assets/images/products.jpg";
import { TProduct } from "../../type/types";
import { NavLink } from "react-router-dom";
const HomepageSectionOne = () => {
  //   const { products, setProducts } = useState(4);
  const { data } = useAllProductsQuery(undefined);
  return (
    <div>
      <h1 className="md:text-6xl text-4xl text-zinc-950 text-center md:my-16 my-10">
        New Arrivals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {data?.data.slice(0, 6).map((item: TProduct, index: string) => (
          <div
            key={index}
            className="relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <div className="relative group">
              <img
                src={productImg || "https://via.placeholder.com/450"} // Placeholder or item.image
                // alt={item.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <button className="bg-[#D2B78A] uppercase text-white px-6 sm:px-7 py-3 text-lg sm:text-xl rounded-xl">
                  View Details
                </button>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="mt-4 text-amber-600 font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-[#D2B78A] uppercase text-white px-6 sm:px-7 py-3 text-lg sm:text-xl rounded-xl">
          <NavLink to="/all-products">View all</NavLink>
        </button>
      </div>
    </div>
  );
};

export default HomepageSectionOne;
