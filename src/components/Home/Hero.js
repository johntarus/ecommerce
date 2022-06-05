import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner.png";

function Hero() {
  const navigate = useNavigate();
  const headerAnimate = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textAnimate = {
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

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 2px #ffffff",
      boxShadow: "0px 0px 4px #243E8B",
      transition: {
        duration: 0.3,
      },
    },
  };

  const linksAnimate = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div>
      <div className="grid grid-cols-2 divide-x justify-items-center sm:grid-cols-1 md:grid-cols-1 mb-20">
        <div className="mt-28 px-12 sm:px-8">
          <motion.h2
            className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-[#ed4833] mb-10 sm:text-2xl md:text-2xl lg:text-3xl"
            variants={headerAnimate}
            initial="hidden"
            animate="visible"
          >
            FASHION DEALS <br /> YOU LOVE
          </motion.h2>
          <motion.p
            className="pt-4 text-xl mb-4"
            variants={textAnimate}
            initial="hidden"
            animate="visible"
          >
            Designed for the jet-setter in mind, our collection is the ideal
            blend of comfort and style. Because you won’t perform at your best
            if you’re irritated by your clothing.
          </motion.p>

          <motion.div
            variants={linksAnimate}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-[#ed4833] hover:from-[#ed4833] hover:to-purple-600  text-white font-bold py-2 px-6 rounded-full mt-8"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              onClick={() => navigate("/products")}
            >
              Shop now
            </motion.button>
          </motion.div>
        </div>

        <motion.img
          className="object-cover h-76 w-96 py-8"
          src={banner}
          alt="banner"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );
}

export default Hero;
