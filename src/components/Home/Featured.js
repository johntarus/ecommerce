import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Featured = ({ product }) => {
  const [products] = useContext(ProductsContext);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F5F5F5] px-20 sm:px-6 mb-8 pb-12">
      <h1 className="text-center font-bold text-4xl pt-12 pb-12 mb-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-4 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-4 text-center">
        {products.slice(0, 4).map((product) => {
          return (
            <div key={product.id} className="grid">
              <div className="relative">
                <img
                  className="h-60 w-60 sm:w-full sm:px-8 rounded-md hover:opacity-75 hover:scale-105"
                  src={product.image}
                  alt={product.name}
                />
                <svg
                  className="w-8 h-8 z-10 absolute bottom-0 right-0 cursor-pointer fill-[#ED4833] hover:scale-125 hover:skew-y-12"
                  stroke="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => dispatch(addToCart(product))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              <h1 className="pt-2">{product.name}</h1>
              <p className="text-[#ED4833] mb-2">$ {product.price}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center items-center">
        <Link to={`/products`}>
          <button className="bg-[#ECC488] hover:bg-[#ED4833] text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent sm:w-36 sm:h-12 rounded">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
