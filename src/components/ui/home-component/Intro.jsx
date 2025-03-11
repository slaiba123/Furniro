import Link from "next/link";
export default function Intro() {
  return (
    <div className="relative w-full h-[600px] md:h-[600px] sm:h-[500px]">
      {/* Image Container */}
      <div className="w-full h-full">
        <img
          src="/images/into-img.png"
          alt="Interior Decor"
          className="w-full h-full object-cover"
        />
      </div>
     
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end sm:mr-0 md:mr-10 lg:mr-20">
        <div className="bg-[#FFF3E3] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-11/12 max-w-lg md:max-w-lg sm:w-10/12 md:w-auto md:h-[20rem] sm:h-auto">
          <p className="text-[#333333] uppercase tracking-wide text-xs sm:text-sm font-semibold mb-2">
            New Arrival
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brownMunday mb-4 leading-tight">
            Discover Our <br/> New Collection
          </h1>
          <p className="text-[#333333] mb-4 sm:mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop" className="block">
            <button className="w-full sm:w-auto bg-brownMunday text-white font-semibold py-3 sm:py-4 px-8 sm:px-16 hover:bg-yellow-600 transition duration-300">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}