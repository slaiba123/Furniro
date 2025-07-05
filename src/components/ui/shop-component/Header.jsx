// "use client"
// import React from "react";

// const Headershop = ({ onLayoutChange, onimgchange,imgdisplay }) => {
//   return (
//     <div>
     
//       <div className="bg-[#F9F1E7] h-[300px] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-semibold text-gray-800 mb-4">Shop</h1>
//           <nav className="text-gray-600">
//             <span className="font-semibold">Home</span> &gt; <span>Shop</span>
//           </nav>
//         </div>
//       </div>
//       <div className="flex items-center justify-between bg-[#faf4ec] p-4 border-t border-b border-gray-200">
      
//         <div className="flex items-center space-x-4 ml-8">
         
//           <button className="flex items-center space-x-1 text-gray-800">
//             <img src="/images/filter.png" alt="" />
//             <span>Filter</span>
//           </button>

//           <div className="flex items-center space-x-2">
//             <button
//               className="p-2 hover:bg-gray-100"
//               onClick={() => onLayoutChange("grid")}
//             >
//               <img src="/images/grid.png" alt="Grid View" />
//             </button>
//             <button
//               className="p-2 hover:bg-gray-100"
//               onClick={() => onLayoutChange("slider")}
//             >
//               <img src="/images/slide.png" alt="Slider View" />
//             </button>
//           </div>

          
//           <div className="border-2 border-black h-6"></div>

         
//           <p className="text-black">Showing 1–{imgdisplay} of 32 results</p>
//         </div>

        
//         <div className="flex items-center space-x-4">
         
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-800">Show</span>
//             <select className="border border-gray-300 rounded px-[1.6rem] py-1 bg-white text-gray-800" onChange={(e) => onimgchange(e.target.value)}>
//               <option value="8" >8</option>
//               <option value="16" >16</option>
//               <option value="32">32</option>
//             </select>
//           </div>

         
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-800">Sort by</span>
//             <select className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-800">
//               <option value="default">Default</option>
//               <option value="price-low-high">Price: Low to High</option>
//               <option value="price-high-low">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headershop;


// "use client";
// import React from "react";

// const Headershop = ({ onLayoutChange, onimgchange, imgdisplay }) => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="bg-[#F9F1E7] h-[280px] flex flex-col items-center justify-center text-center">
//         <h1 className="text-5xl font-bold text-gray-800 mb-3">Shop</h1>
//         <nav className="text-gray-600 text-lg">
//           <span className="font-medium text-black">Home</span> &gt; <span>Shop</span>
//         </nav>
//       </div>

//       {/* Filter & Sorting Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#faf4ec] p-5 border-t border-b border-gray-300 shadow-md space-y-4 md:space-y-0">
        
//         {/* Left Section - Filter & Layout Options */}
//         <div className="flex flex-wrap items-center space-x-4">
//           {/* Filter Button */}
//           <button className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition">
//             <img src="/images/filter.png" alt="Filter" className="w-5 h-5 mr-2" />
//             <span className="text-gray-800 font-medium">Filter</span>
//           </button>

//           {/* Layout Toggle Buttons */}
//           <div className="flex space-x-2">
//             <button
//               className="p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//               onClick={() => onLayoutChange("grid")}
//             >
//               <img src="/images/grid.png" alt="Grid View" className="w-6 h-6" />
//             </button>
//             <button
//               className="p-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//               onClick={() => onLayoutChange("slider")}
//             >
//               <img src="/images/slide.png" alt="Slider View" className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="hidden md:block border-l-2 border-gray-400 h-6"></div>

//           {/* Results Count */}
//           <p className="text-lg font-medium text-gray-700">
//             Showing 1–{imgdisplay} of 32 results
//           </p>
//         </div>

//         {/* Right Section - Sorting & Display Options */}
//         <div className="flex flex-wrap items-center space-x-4">
//           {/* Show Items Per Page */}
//           <div className="flex items-center space-x-2">
//             <span className="text-lg font-medium text-gray-800">Show</span>
//             <select
//               className="border border-gray-400 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none"
//               onChange={(e) => onimgchange(e.target.value)}
//             >
//               <option value="8">8</option>
//               <option value="16">16</option>
//               <option value="32">32</option>
//             </select>
//           </div>

//           {/* Sort By Dropdown */}
//           <div className="flex items-center space-x-2">
//             <span className="text-lg font-medium text-gray-800">Sort by</span>
//             <select className="border border-gray-400 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none">
//               <option value="default">Default</option>
//               <option value="price-low-high">Price: Low to High</option>
//               <option value="price-high-low">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headershop;


// "use client";
// import React from "react";

// const Headershop = ({ onLayoutChange, onimgchange, imgdisplay }) => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="bg-[#F9F1E7] h-[300px] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-semibold text-gray-800 mb-4">Shop</h1>
//           <nav className="text-gray-600">
//             <span className="font-semibold">Home</span> &gt; <span>Shop</span>
//           </nav>
//         </div>
//       </div>

//       {/* Filter and Sorting Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between bg-[#faf4ec] p-4 border-t border-b border-gray-200 space-y-4 md:space-y-0">
        
//         {/* Left Side - Filter & Layout Options */}
//         <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
//           <button className="flex items-center space-x-1 text-gray-800">
//             <img src="/images/filter.png" alt="Filter" className="w-5 h-5" />
//             <span>Filter</span>
//           </button>

//           {/* Layout Toggle Buttons */}
//           <div className="flex items-center space-x-2">
//             <button
//               className="p-2 hover:bg-gray-100"
//               onClick={() => onLayoutChange("grid")}
//             >
//               <img src="/images/grid.png" alt="Grid View" className="w-5 h-5" />
//             </button>
//             <button
//               className="p-2 hover:bg-gray-100"
//               onClick={() => onLayoutChange("slider")}
//             >
//               <img src="/images/slide.png" alt="Slider View" className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Divider Line (Hidden on Small Screens) */}
//           <div className="hidden md:block border-2 border-black h-6"></div>

//           {/* Results Count */}
//           <p className="text-black text-sm md:text-base">
//             Showing 1–{imgdisplay} of 32 results
//           </p>
//         </div>

//         {/* Right Side - Sorting & Showing Options */}
//         <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
//           {/* Items Per Page Selector */}
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-800">Show</span>
//             <select
//               className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800"
//               onChange={(e) => onimgchange(e.target.value)}
//             >
//               <option value="8">8</option>
//               <option value="16">16</option>
//               <option value="32">32</option>
//             </select>
//           </div>

//           {/* Sort By Selector */}
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-800">Sort by</span>
//             <select className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800">
//               <option value="default">Default</option>
//               <option value="price-low-high">Price: Low to High</option>
//               <option value="price-high-low">Price: High to Low</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Headershop;

"use client";
import React from "react";

const Headershop = ({ onLayoutChange, onimgchange, imgdisplay }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#F9F1E7] h-[300px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">Shop</h1>
          <nav className="text-gray-600">
            <span className="font-semibold">Home</span> &gt; <span>Shop</span>
          </nav>
        </div>
      </div>

      {/* Filter and Sorting Section */}
      <div className="md:flex md:flex-row md:items-center md:justify-between bg-[#faf4ec] p-4 border-t border-b border-gray-200 md:space-y-0">
        {/* Mobile-only header section */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <button className="flex items-center space-x-1 text-gray-800">
            <img src="/images/filter.png" alt="Filter" className="w-5 h-5" />
            <span>Filter</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("grid")}
            >
              <img src="/images/grid.png" alt="Grid View" className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("slider")}
            >
              <img src="/images/slide.png" alt="Slider View" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Left Side - Filter & Layout Options (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-4 md:w-auto">
          <button className="flex items-center space-x-1 text-gray-800">
            <img src="/images/filter.png" alt="Filter" className="w-5 h-5" />
            <span>Filter</span>
          </button>
          
          {/* Layout Toggle Buttons */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("grid")}
            >
              <img src="/images/grid.png" alt="Grid View" className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100"
              onClick={() => onLayoutChange("slider")}
            >
              <img src="/images/slide.png" alt="Slider View" className="w-5 h-5" />
            </button>
          </div>
          
          {/* Divider Line */}
          <div className="border-2 border-black h-6"></div>
          
          {/* Results Count */}
          <p className="text-black text-base">
            Showing 1–{imgdisplay} of 32 results
          </p>
        </div>

        {/* Results Count (Mobile) */}
        <p className="text-black text-sm mb-4 md:hidden">
          Showing 1–{imgdisplay} of 32 results
        </p>



<div className="grid grid-cols-2 gap-2 w-full md:flex md:flex-row md:items-center md:space-x-4 md:w-auto">
  {/* Items Per Page Selector */}
  <div className="flex items-center space-x-2 w-full">
    <span className="text-gray-800 min-w-[40px]">Show</span>
    <select
      className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800 w-full"
      onChange={(e) => onimgchange(e.target.value)}
    >
      <option value="8">8</option>
      <option value="16">16</option>
      <option value="32">32</option>
    </select>
  </div>
  
  {/* Sort By Selector */}
  <div className="flex items-center space-x-2 w-full">
    <span className="text-gray-800 min-w-[50px]">Sort by</span>
    <select className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800 w-full">
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