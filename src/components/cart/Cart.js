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
    <div>
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
        <div className="px-20">
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
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="">{product.price}</div>
                <div className="flex items-center line-height-inherit">
                  <button
                    className=""
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <div>{product.quantity}</div>
                  <button
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div>{product.price * product.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>Grand Total ${totalCartPrice()}</div>
    </div>
  );
};

export default Cart;
