"use client";
import {React,useState} from 'react'
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer2 from "@/components/ui/Footer2";

export default function Checkout() {
  const { register, handleSubmit } = useForm();
  const [selectedMethod, setSelectedMethod] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-[3rem] ">
      <div className="ml-[12rem]"><h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="text-sm text-black mb-6">
        <span><strong>Home &gt;</strong> Checkout</span>
      </div></div>
       
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[15rem] p-6 max-w-6xl mx-6  ml-[10rem] ">
     
      <div className="ml-4 ">
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input {...register("firstName")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input {...register("lastName")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name (Optional)
            </label>
            <Input {...register("companyName")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-sm  mb-1">Country / Region</label>
            <select
              {...register("country")}
              className="w-full border rounded-lg text-[#9F9F9F] px-3 py-[1rem] mb-4 focus:outline-none focus:border-black appearance-none"
            >
              <option>Sri Lanka</option>
              <option>Pakistan</option>
              <option>India</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Street Address</label>
            <Input {...register("streetAddress")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
          </div>
         
            <div>
              <label className="block text-sm font-medium mb-1">Town / City</label>
              <Input {...register("city")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-sm text-sadboihours mb-1 ">Province</label>
              <select
                {...register("province")}
                className="w-full  rounded-lg px-3  mb-4 py-[1rem] focus:outline-none focus:border-black"
              >
                <option>Western Province</option>
                <option>Southern Province</option>
              </select>
            </div>
          
          
            <div>
              <label className="block text-sm font-medium mb-1 ">ZIP Code</label>
              <Input {...register("zipCode")}  className="mb-4 py-[1.5rem] focus:outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input {...register("phone")}   className="mb-4 py-[1.5rem] focus:outline-none focus:border-black"/>
            </div>
         
          <div>
            <label className="block text-sm  mb-1">Email Address</label>
            <Input {...register("email")}   className="mb-4 py-[1.5rem] focus:outline-none focus:border-black"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 mt-4"></label>
            <Input {...register("email")} placeholder="Additional Information" className="mt-6 mb-4 py-[1.5rem] focus:outline-none focus:border-black"/>
          </div>
        </form>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold mb-6 ml-4">Product</h2>
        <div className=" p-6  space-y-4">
          <div className="flex justify-between">
            <p ><span className="text-sadboihours">Asgaard Sofa</span> x1 </p>
            
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between font-bold ">
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p className="text-brownMunday text-xl">Rs. 250,000.00</p>
          </div>
          <div>
            <h3 className="font-bold mt-4 mb-2">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  {...register("paymentMethod")}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="checked:bg-black form-radio"
                />
                <span>Direct Bank Transfer</span>
                
                

              </label>
              {selectedMethod === "bank" && (
          <p className="text-sm text-gray-600 mt-4">
           Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
          )}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  {...register("paymentMethod")}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="checked:bg-black form-radio"
                />
                <span>Cash On Delivery</span>
                
              </label>
            </div>
          </div>
        
          {selectedMethod === "cod" && (
          <p className="text-sm text-gray-600 mt-4">
            You have selected Cash on Delivery. Payment will be collected at the time of delivery.
          </p>
          )}
          <p className="text-sm text-black mt-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <strong>privacy policy.</strong>
            
          </p>
          <div className="mx-[4rem]">

          <button className="w-full mt-4 bg-transparent text-black border-black border p-3 rounded-xl mr-[5rem]">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    <Footer2/>
    </div>
  );
}
