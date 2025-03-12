'use client'
import { createSlice } from '@reduxjs/toolkit';
const loadProductFromStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const savedProduct = localStorage.getItem('selectedProduct');
      if (savedProduct) {
        return {
          selectedProduct: JSON.parse(savedProduct),
        };
      }
    } catch (error) {
      console.error('Error loading product from localStorage:', error);
    }
  }
  return {
    selectedProduct: null,
  };
};

const initialState = loadProductFromStorage();


const saveProductToStorage = (product) => {
  if (typeof window !== 'undefined') {
    try {
      if (product) {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
      } else {
        localStorage.removeItem('selectedProduct');
      }
    } catch (error) {
      console.error('Error saving product to localStorage:', error);
    }
  }
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log(action.payload);
      state.selectedProduct = action.payload;
      
      saveProductToStorage(action.payload);
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null; 
      saveProductToStorage(null);
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;