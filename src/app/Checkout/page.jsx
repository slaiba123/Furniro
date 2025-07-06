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
