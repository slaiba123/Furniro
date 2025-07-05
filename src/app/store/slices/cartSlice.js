'use client'
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const loadStateFromStorage = () => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  }
  return {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };
};

const initialState = loadStateFromStorage();


const saveStateToStorage = (state) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify({
      cartItems: state.cartItems,
      totalQuantity: state.totalQuantity,
      totalPrice: state.totalPrice,
    }));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
     
      const itemWithId = {
        ...action.payload,
        id: action.payload.id || nanoid()
      };
     
      const item = state.cartItems.find((p) => p.name === itemWithId.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...itemWithId, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += itemWithId.price;
      console.log(state.cartItems);
      
      
      saveStateToStorage(state);
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find((p) => p.name === action.payload.name);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((p) => p.name !== action.payload.name);
       
        saveStateToStorage(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((p) => p.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
          state.cartItems = state.cartItems.filter((p) => p.name !== action.payload.name);
        }
        
        
        saveStateToStorage(state);
      }
    },
   
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      
   
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;