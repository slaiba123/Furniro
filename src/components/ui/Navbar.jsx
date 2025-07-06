'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">

        {/* Logo + Brand */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
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
        <nav className={`fixed inset-0 bg-white transform 
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
          <button onClick={toggleMenu} className="absolute top-4 right-4 md:hidden text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <Link href="/" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>Home</Link>
          <Link href="/shop" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>Shop</Link>
          <Link href="/About" className="text-black hover:text-gray-800 hover:font-bold" onClick={toggleMenu}>About</Link>

          <SignedIn>
            <div className="md:hidden">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="md:hidden">
              <SignInButton mode="modal">
                <button className="text-sm text-gray-700 hover:text-blue-600 border border-gray-300 px-3 py-1 rounded-lg">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </nav>

        <div className={`fixed bottom-0 left-0 right-0 bg-white md:static 
          flex items-center justify-around md:justify-between 
          md:space-x-4 lg:space-x-4 
          py-2 md:py-0 
          border-t md:border-t-0
          ${isMenuOpen ? 'hidden md:flex' : 'flex'}
        `}>
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            <img src="/images/Person.png" alt="Profile" className="w-5 md:w-6 h-auto object-cover" />
          </Link>
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            <img src="/images/search.png" alt="Search" className="w-5 md:w-5 h-auto object-cover" />
          </Link>
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            <img src="/images/heart.png" alt="Favorites" className="w-5 md:w-5 h-auto object-cover" />
          </Link>
          <Link href="/CartPage" className="text-gray-700 hover:text-gray-900 relative">
            <img src="/images/cart.png" alt="Cart" className="w-5 md:w-5 h-auto object-cover" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>


          
          <SignedIn>
            <div className="hidden md:block">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          
          <SignedOut>
            <div className="hidden md:block">
              <SignInButton mode="modal">
                <button className="text-sm text-gray-700 hover:text-blue-600 border border-gray-300 px-3 py-1 rounded-lg">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
