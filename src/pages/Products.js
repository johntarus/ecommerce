import React from "react";

const Products = () => {
  fetch("../components/data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div>Products</div>;
};

export default Products;
