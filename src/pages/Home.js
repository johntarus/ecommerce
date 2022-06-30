import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import Overview from "../components/Home/Overview";
import Featured from "../components/Home/Featured";
import History from "../components/Home/History";
import Newsletter from "../components/Home/Newsletter";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const Home = () => {
  return (
    <>
      <Hero />
      <FadeInWhenVisible>
        <Benefits />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Featured />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Overview />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <History />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Newsletter />
      </FadeInWhenVisible>
    </>
  );
};

export default Home;
