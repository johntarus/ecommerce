import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  getCartTotal,
  clearCart,
} from "../../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  return (
    <div className="px-20 md:px-6 sm:px-2">
      <h2 className="text-center font-semibold text-2xl mb-12">Cart Items</h2>
      {cart.items < 1 ? (
        <>
          <div>
            <p className="text-center text-xl mb-8">
              Your Cart is currently Empty
            </p>
            <div>
              <Link
                to="/products"
                className="flex justify-center sm:text-lg hover:text-[#9333EA]"
              >
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
        </>
      ) : (
        <>
          <div className="grid grid-cols-4 font-semibold text-xl sm:hidden">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <hr className="bg-gray-500 shadow-lg" />
          <div className="mt-6">
            {cart.items.map((product) => (
              <div key={product.id} className="grid grid-cols-4 ">
                <div className="flex sm:mr-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 sm:h-15 sm:w-15 rounded-md"
                  />
                  <div className="2xl:ml-4 sm:ml-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <button
                      className="bg-transparent mt-2 text-semibold py-1 px-2 sm:px-1 sm:py-1 border border-[#9333EA] rounded"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="sm:ml-16">$ {product.price}</div>
                <div className="flex items-center -mt-14 sm:ml-8">
                  <button
                    className="bg-transparent mt-2 text-semibold py-1 px-2 border border-[#9333EA] rounded"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    -
                  </button>
                  <div className="m-2 sm:m-1">{product.quantity}</div>
                  <button
                    className="bg-transparent mt-2 text-semibold py-1 px-2 border border-[#9333EA] rounded"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold sm:ml-6">
                  <p>$ {product.price * product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between my-10">
            <div className="flex-start">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-transparent mt-2 text-semibold py-2 px-4 border border-[#9333EA] rounded hover:bg-[#9333EA] hover:text-white"
              >
                Clear Cart
              </button>
            </div>
            <div className="mr-40 sm:mr-6 w-[200px]">
              <p className="mb-4">
                Grand Total{" "}
                <span className="font-semibold"> $ {cart.totalAmount}</span>
              </p>
              <p className="text-sm mb-3">
                Taxes & shipping calculated at checkout
              </p>
              <Link to="/sign-in">
              <button className="bg-transparent hover:bg-[#9333EA] hover:text-white mt-2 text-semibold py-2 px-16 border border-[#9333EA] my-4 rounded">
                Checkout
              </button>
              </Link>
              <Link to="/products" className="flex hover:text-[#9333EA]">
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
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
          ;
        </>
      )}
    </div>
  );
};

export default Cart;
