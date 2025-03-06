
// "use client"
// import Footer2 from "@/components/ui/Footer2";
// import Link from "next/link";
// import React, { useState } from "react";

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       name: "Asgaard sofa",
//       price: 250000,
//       quantity: 1,
//       image: "/images/sofa1.png",
//     },
//   ]);

//   const updateQuantity = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//     <div className="px-4 py-6 lg:px-20 mb-[10rem]">
//       <h1 className="text-3xl font-medium mb-4">Cart</h1>
//       <div className="text-sm text-black mb-6">
//         <span><strong>Home &gt;</strong> Cart</span>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
        
//         <div className="w-full lg:w-3/4">
//           <div className="bg-[#F9F1E7] p-4 grid grid-cols-4 gap-4 items-center text-sm font-semibold text-gray-700 mb-6">
//             <span>Product</span>
//             <span>Price</span>
//             <span>Quantity</span>
//             <span>Subtotal</span>
//           </div>
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="grid grid-cols-4 gap-4 items-center py-4 "
//             >
//               <div className="flex items-center gap-4 ">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-md bg-[#F9F1E7]"
//                 />
//                 <p className="text-sm font-medium">{item.name}</p>
//               </div>
//               <p className="text-sm font-medium">
//                 Rs. {item.price.toLocaleString()}
//               </p>
//               <div className="flex items-center">
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) =>
//                     updateQuantity(item.id, parseInt(e.target.value))
//                   }
//                   className="w-12 p-2 border rounded-md text-center"
//                 />
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-sm font-medium">
//                   Rs. {(item.price * item.quantity).toLocaleString()}
//                 </p>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-red-500 hover:text-red-700 ml-4"
//                 >
//                   <img src="/images/cartdelete.png"></img>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

        
//         <div className="w-full lg:w-1/4 ">
//           <div className="bg-[#F9F1E7]  pb-[6rem] pt-[1rem] px-[4rem]">
//             <h2 className="text-xl font-semibold mb-10 text-center ">Cart Totals</h2>
//             <div className="flex justify-between text-sm mb-4">
//               <span>Subtotal</span>
//               <span>Rs. {subtotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-sm font-bold mb-4">
//               <span>Total</span>
//               <span className="text-brownMunday">
//                 Rs. {subtotal.toLocaleString()}
//               </span>
//             </div>
//             <button className="w-3/4 ml-5 border border-black text-black py-2 mt-4 rounded-xl hover:bg-brownMunday hover:text-white hover:border-none" >
//             <Link href="/Checkout">
//               Check Out
              
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer2/>
//     </div>
//   );
// }

"use client"
import Footer2 from "@/components/ui/Footer2";
import Link from "next/link";
import React, { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/images/sofa1.png",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
    <div className="px-4 sm:px-6 lg:px-20 py-6 mb-40">
      <h1 className="text-3xl font-medium mb-4">Cart</h1>
      <div className="text-sm text-black mb-6">
        <span><strong>Home &gt;</strong> Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        {/* <div className="w-full lg:w-3/4 overflow-x-auto">
          <div className="bg-[#F9F1E7] p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-sm font-semibold text-gray-700 mb-6">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center py-4"
            >
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
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-12 p-2 border rounded-md text-center"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <img src="/images/cartdelete.png" alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full lg:w-3/4 overflow-x-auto">
        {/* Header row - changes to vertical on mobile */}
        <div className="bg-[#F9F1E7] p-4 hidden sm:grid sm:grid-cols-4 gap-4 items-center text-sm font-semibold text-gray-700 mb-6">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        
        {/* Cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="mb-6 border-b pb-4 sm:border-0 sm:pb-0"
          >
            {/* Mobile view - shows as blocks/cards */}
            <div className="sm:hidden flex flex-col space-y-3">
              {/* <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-700">Product:</span>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-md bg-[#F9F1E7] items-center justify-center ml-9"
                />
                <p className="text-sm font-medium">{item.name}</p>
              </div> */}
               
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
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-12 p-2 border rounded-md text-center"
                  />
                </div>
                
                <span className="text-sm font-bold text-gray-700">Subtotal:</span>
                <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
              </div>
              
              <div className="flex justify-end">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <img src="/images/cartdelete.png" alt="Delete" />
                </button>
              </div>
            </div>
            
            {/* Desktop view - shows as grid */}
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
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-12 p-2 border rounded-md text-center"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  <img src="/images/cartdelete.png" alt="Delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/4">
          <div className="bg-[#F9F1E7] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">Cart Totals</h2>
            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-bold mb-4">
              <span>Total</span>
              <span className="text-brownMunday">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button className="w-full border border-black text-black py-2 mt-4 rounded-xl hover:bg-brownMunday hover:text-white hover:border-none">
              <Link href="/Checkout">Check Out</Link>
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer2 />
    </div>
  );
}
