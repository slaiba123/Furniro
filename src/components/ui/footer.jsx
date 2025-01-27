function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
         
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pl-4">
            <h1 className="text-xl font-bold">Funiro.</h1>
          </div>

         
          <div className="w-full md:w-1/4 mb-6 md:mb-0 pl-10">
            <h3 className="text-sadboihours font-semibold mb-8">Links</h3>
            <ul>
              <li className="mb-8"><a href="/" className="text-gray-800 hover:underline font-bold">Home</a></li>
              <li className="mb-8"><a href="/shop" className="text-gray-800 hover:underline font-bold">Shop</a></li>
              <li className="mb-8"><a href="/" className="text-gray-800 hover:underline font-bold">About</a></li>
              <li><a href="/" className="text-gray-800 hover:underline font-bold">Contact</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-sadboihours font-semibold  mb-6">Help</h3>
            <ul>
              <li className="mb-8  font-bold"><a href="#" className="text-gray-800 hover:underline">Payment Options</a></li>
              <li className="mb-8  font-bold"><a href="#" className="text-gray-800 hover:underline">Returns</a></li>
              <li><a href="#" className="text-gray-800 hover:underline font-bold">Privacy Policies</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 pr-10">
            <h3 className="text-sadboihoursfont-semibold  mb-8">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border-b-black  text-sm focus:outline-none mr-2 "

              />
              <button className=" ml-2 px-4 py-2 bg-none text-black  text-sm hover:text-gray-700 border-b border-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

       
          <div className="mt-8">
            <div className="border-t border-gray-200 mx-4"></div>
            <p className="text-black text-sm  mt-4 pl-8">
              2023 funiro. All rights reserved
            </p>
          </div>

      </div>
    </footer>
  );
}

export default Footer;

