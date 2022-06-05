import React from "react";
import { products } from "../components/helpers/data";

const Products = () => {
  return (
    <div className="grid grid-cols-3">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img className="h-60 w-60" src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
