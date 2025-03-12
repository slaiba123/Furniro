function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 sm:py-6 md:py-8 mt-4 sm:mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          
        
          <div className="w-full mb-6 pl-2 sm:pl-4">
            <h1 className="text-lg sm:text-xl font-bold">Funiro.</h1>
          </div>
          
          {/* Links */}
          <div className="w-1/2 xs:w-1/2 sm:w-1/3 md:w-1/4 mb-6 pl-2 sm:pl-4">
            <h3 className="text-sadboihours font-semibold mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">Links</h3>
            <ul>
              <li className="mb-3 sm:mb-5 md:mb-8"><a href="/" className="text-gray-800 hover:underline font-bold text-sm sm:text-base">Home</a></li>
              <li className="mb-3 sm:mb-5 md:mb-8"><a href="/shop" className="text-gray-800 hover:underline font-bold text-sm sm:text-base">Shop</a></li>
              <li className="mb-3 sm:mb-5 md:mb-8"><a href="/About" className="text-gray-800 hover:underline font-bold text-sm sm:text-base">About</a></li>
              <li><a href="/" className="text-gray-800 hover:underline font-bold text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          {/* Help */}
          <div className="w-1/2 xs:w-1/2 sm:w-1/3 md:w-1/4 mb-6 pl-2 sm:pl-0">
            <h3 className="text-sadboihours font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Help</h3>
            <ul>
              <li className="mb-3 sm:mb-5 md:mb-8 font-bold"><a href="#" className="text-gray-800 hover:underline text-sm sm:text-base">Payment Options</a></li>
              <li className="mb-3 sm:mb-5 md:mb-8 font-bold"><a href="#" className="text-gray-800 hover:underline text-sm sm:text-base">Returns</a></li>
              <li><a href="#" className="text-gray-800 hover:underline font-bold text-sm sm:text-base">Privacy Policies</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="w-full sm:w-1/3 md:w-1/4 mb-6 pl-2 sm:pl-0 pr-2 sm:pr-10">
            <h3 className="text-sadboihours font-semibold mb-4 sm:mb-8 text-sm sm:text-base">Newsletter</h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-2 sm:px-4 py-2 border-b border-black text-xs sm:text-sm focus:outline-none mb-2 sm:mb-0 sm:mr-2"
              />
              <button className="w-full sm:w-auto sm:ml-2 px-2 sm:px-4 py-2 bg-none text-black text-xs sm:text-sm hover:text-gray-700 border-b border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 sm:mt-8">
          <div className="border-t border-gray-200 mx-2 sm:mx-4"></div>
          <p className="text-black text-xs sm:text-sm mt-4 pl-2 sm:pl-8">
            2023 funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;