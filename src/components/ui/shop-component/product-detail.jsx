"use client"
import React, { useState } from "react";
import ShoppingCart from '@/components/ui/shop-component/cart'
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [tab, setTab] = useState("description");
  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="div">

    <div className="flex items-center bg-[#F9F1E7] h-[4rem] px-8">
      <div className="text-gray-500 text-sm font-medium flex flex-row">
        <a href="#" className="hover:underline mt-1 mx-4">
          Home
        </a>
        <span className="mt-2 ml-2"><img src="/images/arrownav.png"></img></span>
        <a href="#" className="hover:underline ml-4 mt-1 mr-4">
          Shop
        </a>
        <span className="mx-2 border-r-2 border-black mt-2 mr-2">
        <img src="/images/arrownav.png" className="mr-6 "></img>
        </span>
       
      </div>
      <div className="text-gray-900 text-md font-medium mt-1.5 ml-4">
        <a href="#" className="hover:underline">
          Assgaard sofa
        </a>
      </div>
    </div>
 
    <div className="flex p-8 space-x-8 ">
      
      <div className="w-1/3  flex flex-row ">
        <div className="space-y-4 mt-8">
          
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src={`/images/sofa${index + 1}.png`}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 rounded-lg object-contain border border-gray-200 cursor-pointer bg-[#F9F1E7]"
            />
          ))}
        </div>
        <div className="mt-8 ml-5 items-center justify-center flex bg-[#F9F1E7] rounded-lg">
         
          <img
            src="/images/mainsofa.png"
            alt="Main Product"
            className="object-fill w-full"
          />
        </div>
      </div>

     
      <div className="w-2/3 pl-10 ">
        <h1 className="text-3xl ">Asgaard sofa</h1>
        <p className="text-xl text-sadboihours mt-2 font-bold">Rs. 250,000.00</p>

        <p className="mt-4 text-gray-500 text-wrap ">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact,<br/> stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and <br/>extended highs for a sound.
        </p>

        
        <div className="mt-6">
          <h3 className="font-semibold">Size</h3>
          <div className="flex space-x-3 mt-2 ">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSize === size
                    ? "bg-brownMunday text-white"
                    : "text-gray-800 border-gray-300 bg-[#F9F1E7]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        
        <div className="mt-6">
          <h3 className="font-semibold">Color</h3>
          <div className="flex space-x-3 mt-2 ">
            {[
              { color: "purple", bg: "bg-[#816DFA]" },
              { color: "black", bg: "bg-black" },
              { color: "gold", bg: "bg-brownMunday" },
            ].map(({ color, bg }) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border  ${
                  selectedColor === color
                    ? "border-gray-800"
                    : "border-gray-300"
                } ${bg}`}
              />
            ))}
          </div>
        </div>

        
        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => handleQuantityChange("decrement")}
              className="px-4 py-2 text-lg font-semibold"
            >
              -
            </button>
            <span className="px-4 py-2 text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increment")}
              className="px-4 py-2 text-lg font-semibold"
            >
              +
            </button>
          </div>
         <ShoppingCart/>
         
        </div>
        <div className="border-b border-gray-200 border-2 mt-10 mr-[10rem]">
          
         </div>

       
        <div className="mt-8 text-sm text-sadboihours text-justify">
          <p>
            <strong>SKU</strong> : SS001
          </p>
          <p>
            <strong>Category</strong> : Sofas
          </p>
          <p>
            <strong>Tags</strong> : Sofa, Chair, Home, Shop
          </p>
        </div>

       
        <div className="mt-2 flex space-x-4">
          <p className=" text-sm text-sadboihours">
            <strong>Share</strong>: 
          </p>
          <a href="#" className="text-gray-600">
          
            <img src="/images/facebook.png"></img>
          </a>
          <a href="#" className="text-gray-600">
          <img src="/images/linkedin.png"></img>
          </a>
          <a href="#" className="text-gray-600">
          <img src="/images/twitter.png"></img>
          </a>
        </div>
      </div>
    </div>
    <div className="p-8  min-h-screen">
      <div className="max-w-7xl mx-auto bg-white  p-8">
       
        <div className="flex border-t mb-6 items-center justify-center pt-8">
          <button
            className={`text-lg font-semibold pb-2 px-4 ${
              tab === "description"
                ? " text-black"
                : "text-gray-500"
            }`}
            onClick={() => setTab("description")}
          >
            Description
          </button>
          <button
            className={`text-lg font-semibold pb-2 px-4 ${
              tab === "additional"
                ? " text-black"
                : "text-gray-500"
            }`}
            onClick={() => setTab("additional")}
          >
            Additional Information
          </button>
          <p className="text-lg font-semibold pb-2 px-4">Reviews [5]</p>
        </div>

        {tab === "description" && (
          <div>
            <p className="text-gray-600 mb-8 px-14">
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-600 px-14">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and
              pronounced. The analogue knobs allow you to fine tune the controls
              to your personal preferences while the guitar-influenced leather
              strap enables easy and stylish travel.
            </p>
          </div>
        )}

        {tab === "additional" && (
          <div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est a quidem veniam quia, adipisci enim necessitatibus? Consequuntur labore accusantium fugit quaerat rem, excepturi ex deserunt fuga non minima obcaecati.</p>
          </div>
        )}

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#F9F1E7] p-4 rounded-lg">
            <img
              src="/images/descsofa2.png"
              alt="Sofa 1"
              className="rounded-lg w-full"
            />
          </div>
          <div className="bg-[#F9F1E7] p-4 rounded-lg">
            <img
              src="/images/descsofa2.png"
              alt="Sofa 2"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
