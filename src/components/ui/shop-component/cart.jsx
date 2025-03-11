import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart,decreaseQuantity} from "@/app/store/slices/cartSlice";
export default function ShoppingCart({item}) {

  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Sheet>
      <SheetTrigger asChild>
       <button 
       className="px-6 py-2 text-black bg-none border border-black rounded-lg hover:bg-black hover:text-white"
       onClick={() => dispatch(addToCart(item))}
     >
       Add to Cart
     </button></SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="border-b-2 border-[#D9D9D9] mx-2 mr-10">Shopping Cart</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="px-4 py-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-6 border-b pb-4 last:border-none"
              >
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x{" "}
                    <span className="font-semibold text-[#B88E2F]">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✖
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
          <div className="mt-[15rem] text-left">
            <p className="text-lg font-medium">
              Subtotal:{" "}
              <span className="text-[#B88E2F]">
                Rs. {totalPrice.toLocaleString()}
              </span>
            </p>
          </div>
          <div className="flex justify-between mt-6 border-t-2">
            
            <button className="w-1/2 px-4 py-1 mr-2 border rounded-3xl mt-4 hover:bg-black hover:text-white">
            <Link href="/CartPage">
              Cart
              </Link>
              </button>
           
            
            <button className="w-1/2 px-4 py-1 ml-2 border text-black hover:bg-black hover:text-white rounded-3xl mt-4">
            <Link href="/Checkout">
             Checkout
             </Link>
             </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
