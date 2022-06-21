import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

const Featured = ({ product }) => {
  const [products] = useContext(ProductsContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F5F5F5] px-20 sm:px-6 mb-8 pb-12">
      <h1 className="text-center font-bold text-4xl pt-24 pb-12 mb-6">
        Featured Products
      </h1>
      <div className="grid grid-cols-4 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 px-20 sm:px-4 text-center">
        {products.slice(0, 4).map((product) => {
          return (
            <div key={product.id} className="grid">
              <img
                className="h-60 w-60 sm:w-full sm:px-8 cursor-pointer rounded-md hover:opacity-75 hover:scale-105"
                src={product.image}
                alt={product.name}
              />
              <button
                className="bg-red-600"
                onClick={() => dispatch(addToCart(product))}
              >
                add to cart
              </button>
              <h1 className="pt-2">{product.name}</h1>
              <p className="text-[#ED4833] mb-2">{product.price}</p>
              {/* <p>{product.description}</p> */}
            </div>
          );
        })}
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
