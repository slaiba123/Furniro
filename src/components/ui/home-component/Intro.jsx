

import Link from "next/link";

export default function Intro() {
  return (
    <div className="relative w-full h-[600px]">
      
      <div className="w-full h-full">
        <img
          src="/images/into-img.png" 
          alt="Interior Decor"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="absolute inset-0 flex items-center justify-end mr-20 mt-5 ">
        <div className="bg-[#FFF3E3] p-8 rounded-lg shadow-lg max-w-lg h-[20rem]">
          <p className="text-[#333333] uppercase tracking-wide text-sm font-semibold mb-2">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold font text-brownMunday mb-4">
            Discover Our <br/> New Collection
          </h1>
          <p className="text-[#333333] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/product-detail">
          <button className="bg-brownMunday text-white font-semibold py-4 px-16  hover:bg-yellow-600 transition duration-300">
            Buy Now
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
