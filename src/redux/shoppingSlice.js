

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
      cart: [],
      userInfo: null,
};

export const shoppingSlice = createSlice({
      // name
      name: "shopping",
      // initioalState
      initialState,

      reducers: {
            addToCart: (state, action) => {

                  const shoppingProduct = state.cart.find((item) => item.id === action.payload.id)
                  if (shoppingProduct) {
                        toast.error("Product already exit");
                        shoppingProduct.quantity += 1
                  } else {
                        state.cart.push({ ...action.payload, quantity: 1 })
                        toast.success("Product added successfully!")
                  }
            },

            cartDelete: (state, action) => {
                  state.cart = state.cart.filter((item) => item.id !== action.payload)
            },

            increase: (state, action) => {
                  const shoppingProduct = state.cart.find((item) => item.id === action.payload)
                  if (shoppingProduct) {
                        shoppingProduct.quantity += 1
                  }
            },

            decrease: (state, action) => {
                  const shoppingProduct = state.cart.find((item) => item.id === action.payload)
                  if (shoppingProduct) {
                        //@ts-ignore
                        shoppingProduct.quantity -= 1
                  }
            },

            addToUser: (state, action) => {
                  state.userInfo = action.payload
            },

            removeUser: (state) => {
                  state.userInfo = null
            }

      }


})

export const { addToUser, removeUser, addToCart, decrease, increase, cartDelete } = shoppingSlice.actions;
export default shoppingSlice.reducer;

