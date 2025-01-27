export default function Navbar() {
    return (
      <header className="bg-white ">
        <div className="container mx-auto flex justify-between items-center py-4 px-10">
          
          <div className="text-xl font-bold flex items-center space-x-2">
            <img 
                src="/images/Logo.png" 
                alt="Furniro Logo" 
                className="w-10 h- object-cover"
            />
            <a href="/" className="text-black hover:text-gray-600 mt-2 text-2xl font-Montserrat">
                Furniro
            </a>
          </div>

          
          <nav className="space-x-12">
            <a href="/" className="text-black hover:text-gray-800 hover:font-bold">Home</a>
            <a href="/shop" className="text-black hover:text-gray-800 hover:font-bold">Shop</a>
            <a href="/" className="text-black hover:text-gray-800 hover:font-bold">About</a>
          </nav>
          
          <div className="flex items-center justify-between  space-x-10">
            <a href="/profile" className="text-gray-700 hover:text-gray-900">
            <img 
                src="/images/Person.png" 
                alt="Furniro Logo" 
                className="w-6 h-5 object-cover"
            />
            </a>
            <a href="/search" className="text-gray-700 hover:text-gray-900">
            <img 
                src="/images/search.png" 
                alt="Furniro Logo" 
                className="w-5 h-5 object-cover"
            />
            </a>
            <a href="/fav" className="text-gray-700 hover:text-gray-900">
            <img 
                src="/images/heart.png" 
                alt="Furniro Logo" 
                className="w-5 h-5 object-cover"
            />
            </a>
            <a href="/CartPage" className="text-gray-700 hover:text-gray-900">
            <img 
                src="/images/cart.png" 
                alt="Furniro Logo" 
                className="w-5 h-5 object-cover"
            />
            </a>
          </div>
        </div>
      </header>
    );
  }
  