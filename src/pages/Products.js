import React from "react";
import { motion } from "framer-motion";
import { products } from "../components/helpers/data";

const Products = () => {
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
      className="grid grid-cols-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-8"
      variants={productAnimate}
      initial="hidden"
      animate="visible"
    >
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img
              className="h-60 w-60 sm:w-full sm:px-8"
              src={product.image}
              alt={product.name}
            />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* <p>{product.description}</p> */}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Products;
