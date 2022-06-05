import React from "react";
import { useNavigate } from "react-router-dom";
import product from "../../assets/images/product.jpg";

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F5F5] px-20 sm:px-6 mb-8 pb-12">
      <h1 className="text-center font-bold text-4xl pt-24 pb-12 mb-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-3 gap-6 divide-x content-center text-center font-semibold py-8 sm:grid-cols-1 md:grid-cols-2 pb-16">
        <div>
          <img className="mb-4" src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
        <div>
          <img className="mb-4" src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
        <div>
          <img className="mb-4" src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          className="bg-[#ECC488] hover:bg-[#ED4833] text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent sm:w-36 sm:h-12 rounded"
          onClick={() => navigate("/products")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Featured;
