import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
        toast.info(`increased ${action.payload.name} cart quantity`, {
          position: "bottom-left",
        });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
      toast.info(`increased ${item.name} in cart`, {
        position: "bottom-left",
      });
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      } else {
        item.quantity--;
        toast.warning(`decreased ${item.name} from cart`, {
          position: "bottom-left",
        });
      }
    },

    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
      toast.warning(`removed ${item.name} from cart`, {
        position: "bottom-left",
      });
    },
    clearCart: (state, action) => {
      state.items = [];
      toast.warning(`Cart Cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("items", JSON.stringify(state.items));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
