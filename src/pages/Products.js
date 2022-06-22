import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ProductsContext } from "../context/ProductsContext";

const Products = () => {
  const [products] = useContext(ProductsContext);
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
      className="grid grid-cols-4 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-8 text-center"
      variants={productAnimate}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="mb-4 cursor-pointer rounded-md hover:opacity-75 hover:scale-105"
          >
            <img
              className="h-60 w-60 sm:w-full sm:px-8 "
              src={product.image}
              alt={product.name}
            />
            <button>add to cart</button>
            <h1>{product.name}</h1>
            <p className="text-[#ED4833]">Ksh. {product.price}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Products;
