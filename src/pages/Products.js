import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductsContext } from "../context/ProductsContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartTotal } from "../features/cartSlice";

const Products = () => {
  const [products] = useContext(ProductsContext);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  const productAnimate = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };
  return (
    <motion.div
      className="grid grid-cols-4 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-8 xs:px-2 text-center"
      variants={productAnimate}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="mb-4 cursor-pointer rounded-md hover:opacity-75 hover:scale-110 transition duration-300 ease-in-out"
          >
            <div className="relative">
              <img
                className="h-60 w-60 sm:w-full sm:px-8 "
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
            {/* <button>add to cart</button> */}
            <h1>{product.name}</h1>
            <p className="text-[#ED4833]">$ {product.price}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Products;
