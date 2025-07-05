'use client'
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="relative w-full h-80 bg-[#F9F1E7]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  ">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About Us</h1>
          <div className="flex items-center space-x-2 text-black">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <span>About</span>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto py-16 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2012, Furniro began as a small workshop with a big dream: to make high-quality, 
              beautiful furniture accessible to everyone. What started as a passion project in a tiny garage
              has grown into the company we are proud of today.
            </p>
            <p className="text-gray-700 mb-4">
              Our philosophy is simple: we believe that everybody deserves to live in a space that feels like home.
              That's why we combine timeless design with modern functionality and sustainable materials.
            </p>
            <p className="text-gray-700">
              Every piece of furniture tells a story. We want our products to be part of your story, in your home,
              for generations to come.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="/images/story-img.jpg" 
              alt="Our Workshop" 
              className="w-full h-auto rounded-lg shadow-lg"
               
            />
          </div>
        </div>
      </div>

     
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We take pride in every detail. Our furniture is made by skilled artisans who bring 
                years of experience and passion to their work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Materials</h3>
              <p className="text-gray-600">
                We're committed to using responsibly sourced materials and eco-friendly 
                production methods to minimize our environmental impact.
              </p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your happiness is our priority. We stand behind every piece we sell and are 
                dedicated to ensuring your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto py-16 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/images/femp1.jpg" 
                alt="Team Member" 
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                 
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Jessica Chen</h3>
            <p className="text-gray-600">Founder & Creative Director</p>
          </div>

         
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/images/memp1.jpg" 
                alt="Team Member" 
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Marcus Williams</h3>
            <p className="text-gray-600">Head of Design</p>
          </div>

         
          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/images/femp2_.jpg" 
                alt="Team Member" 
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
               
              />
            </div>
            <h3 className="text-xl font-bold mb-1">Olivia Patel</h3>
            <p className="text-gray-600">Production Manager</p>
          </div>

          <div className="text-center">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src="/images/memp2.jpg" 
                alt="Team Member" 
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
               
              />
            </div>
            <h3 className="text-xl font-bold mb-1">David Nguyen</h3>
            <p className="text-gray-600">Customer Experience</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
           
            <div>
              <p className="text-4xl font-bold text-amber-800 mb-2">10+</p>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            
           
            <div>
              <p className="text-4xl font-bold text-amber-800 mb-2">5,000+</p>
              <p className="text-gray-700 font-medium">Happy Customers</p>
            </div>
            
            
            <div>
              <p className="text-4xl font-bold text-amber-800 mb-2">500+</p>
              <p className="text-gray-700 font-medium">Furniture Collections</p>
            </div>
            
           
            <div>
              <p className="text-4xl font-bold text-amber-800 mb-2">20+</p>
              <p className="text-gray-700 font-medium">Awards Received</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Showroom</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Come and experience Furniro furniture in person. Our showroom is open Monday to Saturday, 
            10am to 6pm. Our team is ready to help you find the perfect pieces for your home.
          </p>
          <Link href="/shop" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}