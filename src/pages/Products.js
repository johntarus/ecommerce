import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
// import { products } from "../components/helpers/data";
import { ProductsContext } from "../ProductsContext";

const Products = () => {
  const [products, setProducts] = useContext(ProductsContext);
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
      className="grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-8 text-center"
      variants={productAnimate}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img
              className="h-60 w-60 sm:w-full sm:px-8 cursor-pointer rounded-md hover:opacity-75 hover:scale-105"
              src={product.image}
              alt={product.name}
            />
            <h1 className="pt-2">{product.name}</h1>
            <p className="text-[#ED4833] mb-2">{product.price}</p>
            {/* <p>{product.description}</p> */}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Products;
