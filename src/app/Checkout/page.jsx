// "use client"
// import {React,useState} from 'react'
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Footer2 from "@/components/ui/Footer2";
// import Link from 'next/link';
// export default function Checkout() {
//   const { register, handleSubmit } = useForm();
//   const [selectedMethod, setSelectedMethod] = useState("");
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div >
//     <div className="mt-[3rem] px-4 sm:px-6 md:px-8 lg:mt-[3rem] lg:px-0 mb-40">
//       <div className="mx-auto lg:ml-[12rem]">
//         <h1 className="text-2xl lg:text-3xl font-bold mb-4">Checkout</h1>
//         <div className="text-sm text-black mb-6">
//           <span><strong>Home &gt;</strong> Checkout</span>
//         </div>
//       </div>
       
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[15rem] p-6 mx-auto lg:mx-6 lg:ml-[10rem] max-w-full lg:max-w-6xl">
//         <div className="w-full lg:ml-4">
//           <h2 className="text-xl lg:text-2xl font-bold mb-6">Billing Details</h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
//               <div>
//                 <label className="block text-sm font-medium mb-1">First Name</label>
//                 <Input {...register("firstName")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Last Name</label>
//                 <Input {...register("lastName")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Company Name (Optional)
//               </label>
//               <Input {...register("companyName")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//             </div>
//             <div>
//               <label className="block text-sm mb-1">Country / Region</label>
//               <select
//                 {...register("country")}
//                 className="w-full border rounded-lg text-[#9F9F9F] px-3 py-3 lg:py-[1rem] mb-4 focus:outline-none focus:border-black appearance-none"
//               >
//                 <option>Sri Lanka</option>
//                 <option>Pakistan</option>
//                 <option>India</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">Street Address</label>
//               <Input {...register("streetAddress")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//             </div>
           
//             <div>
//               <label className="block text-sm font-medium mb-1">Town / City</label>
//               <Input {...register("city")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//             </div>
//             <div>
//               <label className="block text-sm text-sadboihours mb-1">Province</label>
//               <select
//                 {...register("province")}
//                 className="w-full rounded-lg px-3 mb-4 py-3 lg:py-[1rem] focus:outline-none focus:border-black"
//               >
//                 <option>Western Province</option>
//                 <option>Southern Province</option>
//               </select>
//             </div>
          
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
//               <div>
//                 <label className="block text-sm font-medium mb-1">ZIP Code</label>
//                 <Input {...register("zipCode")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Phone</label>
//                 <Input {...register("phone")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black"/>
//               </div>
//             </div>
           
//             <div>
//               <label className="block text-sm mb-1">Email Address</label>
//               <Input {...register("email")} className="mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black"/>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1 mt-4"></label>
//               <Input {...register("additionalInfo")} placeholder="Additional Information" className="mt-6 mb-4 py-3 lg:py-[1.5rem] focus:outline-none focus:border-black"/>
//             </div>
//           </form>
//         </div>

//         <div className="w-full mt-8 lg:mt-0">
//           <h2 className="text-xl lg:text-2xl font-bold mb-6 ml-0 lg:ml-4">Product</h2>
//           <div className="p-4 lg:p-6 space-y-4">
//             <div className="flex justify-between">
//               <p><span className="text-sadboihours">Asgaard Sofa</span> x1 </p>
//               <p>Rs. 250,000.00</p>
//             </div>
//             <div className="flex justify-between font-bold">
//               <p>Subtotal</p>
//               <p>Rs. 250,000.00</p>
//             </div>
//             <div className="flex justify-between font-bold">
//               <p>Total</p>
//               <p className="text-brownMunday text-lg lg:text-xl">Rs. 250,000.00</p>
//             </div>
//             <div>
//               <h3 className="font-bold mt-4 mb-2">Payment Method</h3>
//               <div className="space-y-2">
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="bank"
//                     {...register("paymentMethod")}
//                     onChange={(e) => setSelectedMethod(e.target.value)}
//                     className="checked:bg-black form-radio"
//                   />
//                   <span>Direct Bank Transfer</span>
//                 </label>
//                 {selectedMethod === "bank" && (
//                   <p className="text-sm text-gray-600 mt-4">
//                     Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                   </p>
//                 )}
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="cod"
//                     {...register("paymentMethod")}
//                     onChange={(e) => setSelectedMethod(e.target.value)}
//                     className="checked:bg-black form-radio"
//                   />
//                   <span>Cash On Delivery</span>
//                 </label>
//               </div>
//             </div>
          
//             {selectedMethod === "cod" && (
//               <p className="text-sm text-gray-600 mt-4">
//                 You have selected Cash on Delivery. Payment will be collected at the time of delivery.
//               </p>
//             )}
//             <p className="text-sm text-black mt-4">
//               Your personal data will be used to support your experience
//               throughout this website, to manage access to your account, and for
//               other purposes described in our <strong>privacy policy.</strong>
//             </p>
//             <div className="mx-0 sm:mx-4 lg:mx-[4rem]">
//               <Link href='/Order-placed'>
//               <button className="w-full mt-4 bg-transparent text-black border-black border p-3 rounded-xl lg:mr-[5rem]">Place Order</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </div>
//     <Footer2/>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Footer2 from "@/components/ui/Footer2";
// import Link from "next/link";
// import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// export default function Checkout() {
//   const { register, handleSubmit } = useForm();
//   const [selectedMethod, setSelectedMethod] = useState("");
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <SignedIn>
//         <div>
//           <div className="mt-[3rem] px-4 sm:px-6 md:px-8 lg:mt-[3rem] lg:px-0 mb-40">
//             <div className="mx-auto lg:ml-[12rem]">
//               <h1 className="text-2xl lg:text-3xl font-bold mb-4">Checkout</h1>
//               <div className="text-sm text-black mb-6">
//                 <span>
//                   <strong>Home &gt;</strong> Checkout
//                 </span>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[15rem] p-6 mx-auto lg:mx-6 lg:ml-[10rem] max-w-full lg:max-w-6xl">
//               {/* Billing Form */}
//               <div className="w-full lg:ml-4">
//                 <h2 className="text-xl lg:text-2xl font-bold mb-6">Billing Details</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                   {/* First + Last Name */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">First Name</label>
//                       <Input {...register("firstName")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Last Name</label>
//                       <Input {...register("lastName")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
//                     <Input {...register("companyName")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                   </div>
//                   <div>
//                     <label className="block text-sm mb-1">Country / Region</label>
//                     <select
//                       {...register("country")}
//                       className="w-full border rounded-lg text-[#9F9F9F] px-3 py-3 lg:py-[1rem] mb-4 appearance-none"
//                     >
//                       <option>Sri Lanka</option>
//                       <option>Pakistan</option>
//                       <option>India</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Street Address</label>
//                     <Input {...register("streetAddress")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Town / City</label>
//                     <Input {...register("city")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                   </div>
//                   <div>
//                     <label className="block text-sm mb-1">Province</label>
//                     <select {...register("province")} className="w-full rounded-lg px-3 mb-4 py-3 lg:py-[1rem]">
//                       <option>Western Province</option>
//                       <option>Southern Province</option>
//                     </select>
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">ZIP Code</label>
//                       <Input {...register("zipCode")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Phone</label>
//                       <Input {...register("phone")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm mb-1">Email Address</label>
//                     <Input {...register("email")} className="mb-4 py-3 lg:py-[1.5rem]" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1 mt-4"></label>
//                     <Input
//                       {...register("additionalInfo")}
//                       placeholder="Additional Information"
//                       className="mt-6 mb-4 py-3 lg:py-[1.5rem]"
//                     />
//                   </div>
//                 </form>
//               </div>

//               {/* Product Summary & Payment */}
//               <div className="w-full mt-8 lg:mt-0">
//                 <h2 className="text-xl lg:text-2xl font-bold mb-6 ml-0 lg:ml-4">Product</h2>
//                 <div className="p-4 lg:p-6 space-y-4">
//                   <div className="flex justify-between">
//                     <p>
//                       <span className="text-sadboihours">Asgaard Sofa</span> x1{" "}
//                     </p>
//                     <p>Rs. 250,000.00</p>
//                   </div>
//                   <div className="flex justify-between font-bold">
//                     <p>Subtotal</p>
//                     <p>Rs. 250,000.00</p>
//                   </div>
//                   <div className="flex justify-between font-bold">
//                     <p>Total</p>
//                     <p className="text-brownMunday text-lg lg:text-xl">Rs. 250,000.00</p>
//                   </div>
//                   <div>
//                     <h3 className="font-bold mt-4 mb-2">Payment Method</h3>
//                     <div className="space-y-2">
//                       <label className="flex items-center space-x-2">
//                         <input
//                           type="radio"
//                           name="paymentMethod"
//                           value="bank"
//                           {...register("paymentMethod")}
//                           onChange={(e) => setSelectedMethod(e.target.value)}
//                           className="checked:bg-black form-radio"
//                         />
//                         <span>Direct Bank Transfer</span>
//                       </label>
//                       {selectedMethod === "bank" && (
//                         <p className="text-sm text-gray-600 mt-4">
//                           Make your payment directly into our bank account. Use your Order ID as the payment reference.
//                           Your order will not be shipped until the funds have cleared.
//                         </p>
//                       )}
//                       <label className="flex items-center space-x-2">
//                         <input
//                           type="radio"
//                           name="paymentMethod"
//                           value="cod"
//                           {...register("paymentMethod")}
//                           onChange={(e) => setSelectedMethod(e.target.value)}
//                           className="checked:bg-black form-radio"
//                         />
//                         <span>Cash On Delivery</span>
//                       </label>
//                     </div>
//                   </div>

//                   {selectedMethod === "cod" && (
//                     <p className="text-sm text-gray-600 mt-4">
//                       You have selected Cash on Delivery. Payment will be collected at the time of delivery.
//                     </p>
//                   )}
//                   <p className="text-sm text-black mt-4">
//                     Your personal data will be used to support your experience throughout this website, to manage access
//                     to your account, and for other purposes described in our <strong>privacy policy.</strong>
//                   </p>
//                   <div className="mx-0 sm:mx-4 lg:mx-[4rem]">
//                     <Link href="/Order-placed">
//                       <button className="w-full mt-4 bg-transparent text-black border-black border p-3 rounded-xl lg:mr-[5rem]">
//                         Place Order
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Footer2 />
//         </div>
//       </SignedIn>

//       <SignedOut>
//         <RedirectToSignIn />
//       </SignedOut>
//     </>
//   );
// }



"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import Footer2 from "@/components/ui/Footer2";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Checkout() {
  const { register, handleSubmit } = useForm();
  const [selectedMethod, setSelectedMethod] = useState("");
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const handleStripePayment = async () => {
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      console.log("helliyo",data)
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment failed.");
    }
  };

  return (
    <>
      <SignedIn>
        <div className="mt-[3rem] px-4 sm:px-6 md:px-8 lg:px-20 mb-40">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>
          <div className="text-sm text-black mb-6">
            <strong>Home &gt;</strong> Checkout
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form className="space-y-4" onSubmit={handleSubmit(handleStripePayment)}>
              <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <Input {...register("firstName")} className="py-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <Input {...register("lastName")} className="py-3" />
                </div>
              </div>
              <label className="block text-sm font-medium">Street Address</label>
              <Input {...register("streetAddress")} className="py-3" />

              <label className="block text-sm font-medium">City</label>
              <Input {...register("city")} className="py-3" />

              <label className="block text-sm font-medium">Phone</label>
              <Input {...register("phone")} className="py-3" />

              <label className="block text-sm font-medium">Email</label>
              <Input {...register("email")} className="py-3" />
            </form>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <p>{item.name} x {item.quantity}</p>
                      <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>Rs. {totalPrice.toLocaleString()}</p>
                  </div>
                  <button
                    className="w-full mt-6 bg-black text-white py-3 rounded-lg"
                    onClick={handleStripePayment}
                  >
                    Pay with Card
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <Footer2 />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
