// 'use client'

// import Footer2 from "@/components/ui/Footer2";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {addToCart, removeFromCart,decreaseQuantity} from "@/app/store/slices/cartSlice";
// export default function CartPage() {
//   const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
  
//   const removeItem = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };


  
//   const savedCart = localStorage.getItem('cart');

//   return (
//     <div>
//     <div className="px-4 sm:px-6 lg:px-20 py-6 mb-40">
//       <h1 className="text-3xl font-medium mb-4">Cart</h1>
//       <div className="text-sm text-black mb-6">
//         <span><strong>Home &gt;</strong> Cart</span>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
       
//         <div className="w-full lg:w-3/4 overflow-x-auto">
       
//         <div className="bg-[#F9F1E7] p-4 hidden sm:grid sm:grid-cols-4 gap-4 items-center text-sm font-semibold text-gray-700 mb-6">
//           <span>Product</span>
//           <span>Price</span>
//           <span>Quantity</span>
//           <span>Subtotal</span>
//         </div>
        
       
//         {cartItems.length === 0 && (
//           <div className="text-center py-8">
//             <p className="text-lg">Your cart is empty</p>
//             <Link href="/" className="text-brownMunday hover:underline mt-2 inline-block">
//               Continue Shopping
//             </Link>
//           </div>
//         )}
        
     
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="mb-6 border-b pb-4 sm:border-0 sm:pb-0"
//           >
        
//             <div className="sm:hidden flex flex-col space-y-3">
               
//         <div className="flex gap-[130px]">
//           <span className="text-sm font-bold text-gray-700 mb-2 ">Product:</span>
//           <div className="flex items-center gap-4">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-16 h-16 rounded-md bg-[#F9F1E7]"
//             />
//             <p className="text-sm font-medium">{item.name}</p>
//           </div>
//         </div>
              
//               <div className="grid grid-cols-2 gap-2 mt-2">
//                 <span className="text-sm font-bold text-gray-700">Price:</span>
//                 <p className="text-sm font-medium">Rs. {item.price.toLocaleString()}</p>
                
//                 <span className="text-sm font-bold text-gray-700">Quantity:</span>
//                 <div className="flex items-center">
//                 <button className="px-2 border-black border-2 rounded-lg mr-2" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
//                   <p>{item.quantity}</p>
//                   <button className="px-2 border-black border-2 rounded-lg ml-2" onClick={() => dispatch( addToCart(item))}>+</button>
//                 </div>
                
//                 <span className="text-sm font-bold text-gray-700">Subtotal:</span>
//                 <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
//               </div>
              
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => dispatch(removeFromCart(item))}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <img src="/images/cartdelete.png" alt="Delete" />
//                 </button>
//               </div>
//             </div>
            
          
//             <div className="hidden sm:grid sm:grid-cols-4 gap-4 items-center py-4">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-md bg-[#F9F1E7]"
//                 />
//                 <p className="text-sm font-medium">{item.name}</p>
//               </div>
//               <p className="text-sm font-medium">Rs. {item.price.toLocaleString()}</p>
//               <div className="flex items-center">
//               <button className="px-2 border-black border-2 rounded-lg mr-2" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
//                   <p>{item.quantity}</p>
//                   <button className="px-2 border-black border-2 rounded-lg ml-2" onClick={() => dispatch( addToCart(item))}>+</button>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
//                 <button
//                   onClick={() => dispatch(removeFromCart(item))}
//                   className="text-red-500 hover:text-red-700 ml-4"
//                 >
//                   <img src="/images/cartdelete.png" alt="Delete" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         </div>

//         <div className="w-full lg:w-1/4">
//           <div className="bg-[#F9F1E7] p-6 rounded-lg">
//             <h2 className="text-xl font-semibold mb-6 text-center">Cart Totals</h2>
//             <div className="flex justify-between text-sm mb-4">
//               <span>Subtotal</span>
//               <span>Rs. {totalPrice.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-sm font-bold mb-4">
//               <span>Total</span>
//               <span className="text-brownMunday">Rs. {totalPrice.toLocaleString()}</span>
//             </div>
//             <button 
//               className={`w-full border border-black text-black py-2 mt-4 rounded-xl hover:bg-brownMunday hover:text-white hover:border-none ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={cartItems.length === 0}
//             >
//               {cartItems.length === 0 ? (
//                 <span>Cart Empty</span>
//               ) : (
//                 <Link href="/Checkout">Check Out</Link>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//     </div>
//     <Footer2 />
//     </div>
//   );
// }







'use client'

import Footer2 from "@/components/ui/Footer2";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart, decreaseQuantity} from "@/app/store/slices/cartSlice";

export default function CartPage() {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  
  const removeItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Use useEffect to safely access localStorage after component mounts
  useEffect(() => {
    setIsMounted(true);
    // If you need to do something with localStorage, do it here
    // const savedCart = localStorage.getItem('cart');
    // if (savedCart) {
    //   // Do something with savedCart
    // }
  }, []);

  // Don't render anything until after component mounts
  if (!isMounted) {
    return null; // Or a loading spinner
  }

  return (
    <div>
    <div className="px-4 sm:px-6 lg:px-20 py-6 mb-40">
      <h1 className="text-3xl font-medium mb-4">Cart</h1>
      <div className="text-sm text-black mb-6">
        <span><strong>Home &gt;</strong> Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
       
        <div className="w-full lg:w-3/4 overflow-x-auto">
       
        <div className="bg-[#F9F1E7] p-4 hidden sm:grid sm:grid-cols-4 gap-4 items-center text-sm font-semibold text-gray-700 mb-6">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        
       
        {cartItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-lg">Your cart is empty</p>
            <Link href="/" className="text-brownMunday hover:underline mt-2 inline-block">
              Continue Shopping
            </Link>
          </div>
        )}
        
     
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="mb-6 border-b pb-4 sm:border-0 sm:pb-0"
          >
        
            <div className="sm:hidden flex flex-col space-y-3">
               
        <div className="flex gap-[130px]">
          <span className="text-sm font-bold text-gray-700 mb-2 ">Product:</span>
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md bg-[#F9F1E7]"
            />
            <p className="text-sm font-medium">{item.name}</p>
          </div>
        </div>
              
              <div className="grid grid-cols-2 gap-2 mt-2">
                <span className="text-sm font-bold text-gray-700">Price:</span>
                <p className="text-sm font-medium">Rs. {item.price.toLocaleString()}</p>
                
                <span className="text-sm font-bold text-gray-700">Quantity:</span>
                <div className="flex items-center">
                <button className="px-2 border-black border-2 rounded-lg mr-2" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                  <p>{item.quantity}</p>
                  <button className="px-2 border-black border-2 rounded-lg ml-2" onClick={() => dispatch(addToCart(item))}>+</button>
                </div>
                
                <span className="text-sm font-bold text-gray-700">Subtotal:</span>
                <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-red-500 hover:text-red-700"
                >
                  <img src="/images/cartdelete.png" alt="Delete" />
                </button>
              </div>
            </div>
            
          
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 items-center py-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md bg-[#F9F1E7]"
                />
                <p className="text-sm font-medium">{item.name}</p>
              </div>
              <p className="text-sm font-medium">Rs. {item.price.toLocaleString()}</p>
              <div className="flex items-center">
              <button className="px-2 border-black border-2 rounded-lg mr-2" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                  <p>{item.quantity}</p>
                  <button className="px-2 border-black border-2 rounded-lg ml-2" onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <img src="/images/cartdelete.png" alt="Delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className="w-full lg:w-1/4">
          <div className="bg-[#F9F1E7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">Cart Totals</h2>
            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-bold mb-4">
              <span>Total</span>
              <span className="text-brownMunday">Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <button 
              className={`w-full border border-black text-black py-2 mt-4 rounded-xl hover:bg-brownMunday hover:text-white hover:border-none ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={cartItems.length === 0}
            >
              {cartItems.length === 0 ? (
                <span>Cart Empty</span>
              ) : (
                <Link href="/Checkout">Check Out</Link>
              )}
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer2 />
    </div>
  );
}