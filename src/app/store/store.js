import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/store/slices/cartSlice";
import productReducer from '@/app/store/slices/productSlice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
