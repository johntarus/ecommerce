import React from "react";
import { motion } from "framer-motion";
import about from "../assets/images/about.png";

const About = () => {
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

  return (
    <div>
      <motion.div
        className="grid grid-cols-2 gap-8 px-28 sm:grid-cols-1 sm:px-8 sm:gap-0 xs:mb-8 xs:text-center"
        variants={textAnimate}
        initial="hidden"
        animate="visible"
      >
        <img className="object-cover" src={about} alt="about" />

        <p className="mt-16 text-lg sm:mt-8 xs:mt-0 xs:text-sm">
          Synonymous with the youth movement and counterculture fashions of the
          "Swinging Sixties," the boutique radically changed ways of making,
          marketing, displaying, and buying clothing. Names and places such as
          Mary Quant, Biba, Paraphernalia, the King's Road, and Carnaby Street
          evoke the spirit of freedom, individuality, and rebellion that
          characterized the social upheaval of that decade, and defined a style
          of dressing. As a retailing concept, the boutique is associated with a
          distinct identity that reflects the taste of the designer or owner;
          small-scale production with rapid turnover of merchandise; fashion
          novelty and experimentation; innovative displays and interiors; and an
          informality among owner, salespeople, and clientele.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
