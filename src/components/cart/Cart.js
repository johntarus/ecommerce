import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalCartPrice = () => {
    return cart.items.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    );
  };
  return (
    <div className="px-20">
      <h2 className="text-center font-bold text-3xl mb-12">Cart Items</h2>
      {cart.items < 1 ? (
        <div>
          <p>Your Cart is currently Empty</p>
          <div>
            <Link to="/products" className="flex">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="grid grid-cols-4 font-semibold text-xl">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <hr />
          <div className="mt-6">
            {cart.items.map((product) => (
              <div key={product.id} className="grid grid-cols-4 ">
                <div className="flex">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <button
                      className="bg-transparent mt-2 text-semibold py-1 px-2 border border-[#9333EA] rounded"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="">Ksh. {product.price}</div>
                <div className="flex items-center -mt-14">
                  <button
                    className="bg-transparent mt-2 text-semibold py-1 px-2 border border-[#9333EA] rounded"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <div className="m-2">{product.quantity}</div>
                  <button
                    className="bg-transparent mt-2 text-semibold py-1 px-2 border border-[#9333EA] rounded"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold">
                  Ksh. {product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="my-10">
        <div>
          <button className="bg-transparent mt-2 text-semibold py-2 px-4 border border-[#9333EA] rounded">
            Clear Cart
          </button>
        </div>
        <div>
          <p>
            Grand Total{" "}
            <span className="font-semibold"> Ksh. {totalCartPrice()}</span>
          </p>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="bg-transparent mt-2 text-semibold py-2 px-4 border border-[#9333EA] rounded">
            Checkout
          </button>
          <Link to="/products" className="flex">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
