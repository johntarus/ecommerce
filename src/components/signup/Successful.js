import React from "react";
import { motion } from "framer-motion";

const Successful = () => {
  const pageAnimate = {
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
      className="text-center mt-12"
      variants={pageAnimate}
      initial="hidden"
      animate="visible"
    >
      <h3 className="font-semibold text-xl p-4">
        Your order has been received!
      </h3>
      <h4 className="text-lg p-4">You will be contacted shortly</h4>
      <p className="text-lg p-4">Thank you for shopping with Us!</p>
      <p>😎😍😋😉🥰</p>
    </motion.div>
  );
};

export default Successful;
