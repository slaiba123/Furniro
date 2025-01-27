"use client"
import React from "react";

const Headershop = ({ onLayoutChange, onimgchange,imgdisplay }) => {
  return (
    <div>
     
      <div className="bg-[#F9F1E7] h-[300px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">Shop</h1>
          <nav className="text-gray-600">
            <span className="font-semibold">Home</span> &gt; <span>Shop</span>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#faf4ec] p-4 border-t border-b border-gray-200">
      
        <div className="flex items-center space-x-4 ml-8">
         
          <button className="flex items-center space-x-1 text-gray-800">
            <img src="/images/filter.png" alt="" />
            <span>Filter</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("grid")}
            >
              <img src="/images/grid.png" alt="Grid View" />
            </button>
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("slider")}
            >
              <img src="/images/slide.png" alt="Slider View" />
            </button>
          </div>

          
          <div className="border-2 border-black h-6"></div>

         
          <p className="text-black">Showing 1–{imgdisplay} of 32 results</p>
        </div>

        
        <div className="flex items-center space-x-4">
         
          <div className="flex items-center space-x-2">
            <span className="text-gray-800">Show</span>
            <select className="border border-gray-300 rounded px-[1.6rem] py-1 bg-white text-gray-800" onChange={(e) => onimgchange(e.target.value)}>
              <option value="8" >8</option>
              <option value="16" >16</option>
              <option value="32">32</option>
            </select>
          </div>

         
          <div className="flex items-center space-x-2">
            <span className="text-gray-800">Sort by</span>
            <select className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-800">
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headershop;
