import React from "react";
import product from "../../assets/images/product.jpg";

const Featured = () => {
  return (
    <div className="bg-[#F5F5F5] px-12 mb-12">
      <h1 className="text-center font-bold text-4xl pt-24 pb-12 mb-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-3 gap-6 divide-x content-center text-center shadow-md font-semibold py-8 sm:grid-cols-1 md:grid-cols-2">
        <div>
          <img src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
        <div>
          <img src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
        <div>
          <img src={product} alt="T Shirt" />
          <p>T Shirt</p>
          <p>Ksh. 100</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
