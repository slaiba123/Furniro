// export default function Navbar() {
//     return (
//       <header className="bg-white ">
//         <div className="container mx-auto flex justify-between items-center py-4 px-10">
          
//           <div className="text-xl font-bold flex items-center space-x-2">
//             <img 
//                 src="/images/Logo.png" 
//                 alt="Furniro Logo" 
//                 className="w-10 h- object-cover"
//             />
//             <a href="/" className="text-black hover:text-gray-600 mt-2 text-2xl font-Montserrat">
//                 Furniro
//             </a>
//           </div>

          
//           <nav className="space-x-12">
//             <a href="/" className="text-black hover:text-gray-800 hover:font-bold">Home</a>
//             <a href="/shop" className="text-black hover:text-gray-800 hover:font-bold">Shop</a>
//             <a href="/" className="text-black hover:text-gray-800 hover:font-bold">About</a>
//           </nav>
          
//           <div className="flex items-center justify-between  space-x-10">
//             <a href="/profile" className="text-gray-700 hover:text-gray-900">
//             <img 
//                 src="/images/Person.png" 
//                 alt="Furniro Logo" 
//                 className="w-6 h-5 object-cover"
//             />
//             </a>
//             <a href="/search" className="text-gray-700 hover:text-gray-900">
//             <img 
//                 src="/images/search.png" 
//                 alt="Furniro Logo" 
//                 className="w-5 h-5 object-cover"
//             />
//             </a>
//             <a href="/fav" className="text-gray-700 hover:text-gray-900">
//             <img 
//                 src="/images/heart.png" 
//                 alt="Furniro Logo" 
//                 className="w-5 h-5 object-cover"
//             />
//             </a>
//             <a href="/CartPage" className="text-gray-700 hover:text-gray-900">
//             <img 
//                 src="/images/cart.png" 
//                 alt="Furniro Logo" 
//                 className="w-5 h-5 object-cover"
//             />
//             </a>
//           </div>
//         </div>
//       </header>
//     );
//   }
'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">
          {/* Logo Section */}
          <div className="text-xl font-bold flex items-center space-x-2">
            <img
                src="/images/Logo.png"
                alt="Furniro Logo"
                className="w-8 md:w-10 h-auto object-cover"
            />
            <Link href="/" className="text-black hover:text-gray-600 text-xl md:text-2xl font-Montserrat">
                Furniro
            </Link>
          </div>
         
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
         
          {/* Navigation Links */}
          <nav className={`
            fixed inset-0 bg-white transform 
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:translate-x-0 
            md:relative md:flex md:space-x-8 lg:space-x-12
            transition-transform duration-300 ease-in-out
            md:bg-transparent
            flex flex-col md:flex-row
            items-center justify-center md:justify-start
            text-center md:text-left
            space-y-6 md:space-y-0
            z-40
          `}>
            <Link href="/" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/shop" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>
              About
            </Link>
          </nav>
         
          {/* Icons Section */}
          <div className={`
            fixed bottom-0 left-0 right-0 bg-white md:static 
            flex items-center justify-around md:justify-between 
            md:space-x-4 lg:space-x-6 
            py-2 md:py-0 
            border-t md:border-t-0
            ${isMenuOpen ? 'hidden md:flex' : 'flex'}
          `}>
            <Link href="/profile" className="text-gray-700 hover:text-gray-900">
              <img
                  src="/images/Person.png"
                  alt="Profile"
                  className="w-5 md:w-6 h-auto object-cover"
              />
            </Link>
            <Link href="/search" className="text-gray-700 hover:text-gray-900">
              <img
                  src="/images/search.png"
                  alt="Search"
                  className="w-5 md:w-5 h-auto object-cover"
              />
            </Link>
            <Link href="/fav" className="text-gray-700 hover:text-gray-900">
              <img
                  src="/images/heart.png"
                  alt="Favorites"
                  className="w-5 md:w-5 h-auto object-cover"
              />
            </Link>
            <Link href="/CartPage" className="text-gray-700 hover:text-gray-900">
              <img
                  src="/images/cart.png"
                  alt="Cart"
                  className="w-5 md:w-5 h-auto object-cover"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  }