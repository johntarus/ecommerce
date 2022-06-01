import React from "react";
import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import Overview from "../components/Home/Overview";
import Featured from "../components/Home/Featured";
import History from "../components/Home/History";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Overview />
      <Featured />
      <History />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
