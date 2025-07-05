"use client"
import React, { useState } from "react";
import ShoppingCart from '@/components/ui/shop-component/cart';
import { useSelector } from "react-redux";
const ProductDetail = () => {
 
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const product = selectedProduct || {
    name: "Asgaard Sofa",
    price: "25000",
    description: "A stylish and comfy seating piece, perfect for relaxing and entertaining",
    image:'/images/mainsofa.png'
  };
 
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
          <a href="/" className="hover:underline mt-1 mx-4">Home</a>
          <span className="mt-2 ml-2"><img src="/images/arrownav.png" /></span>
          <a href="/shop" className="hover:underline ml-4 mt-1 mr-4">Shop</a>
          <span className="mx-2 border-r-2 border-black mt-2 mr-2">
            <img src="/images/arrownav.png" className="mr-6 " />
          </span>
        </div>
        <div className="text-gray-900 text-md font-medium mt-1.5 ml-4">
          <a href="#" className="hover:underline">{product.name}</a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 md:p-8 space-y-6 md:space-x-8">
        <div className="md:w-1/3 flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4">
            {[1, 2, 3, 4].map((_, index) => (
              <img
                key={index}
                src={`/images/sofa${index + 1}.png`}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain border border-gray-200 cursor-pointer bg-[#F9F1E7]"
              />
            ))}
          </div>
          <div className="bg-[#F9F1E7] rounded-lg flex justify-center p-4">
            <img src= {`${product.image}`} alt="Main Product" className="object-cover w-full h-[400px] max-w-[300px] md:max-w-full" />
          </div>
        </div>

        <div className="md:w-2/3 px-4 md:px-10">
          <h1 className="text-2xl md:text-3xl">{product.name}</h1>
          <p className="text-lg md:text-xl text-sadboihours mt-2 font-bold">Rs. {product.price}</p>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            {product.description}
          </p>

          <div className="mt-6">
            <h3 className="font-semibold">Size</h3>
            <div className="flex space-x-3 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? "bg-brownMunday text-white" : "text-gray-800 border-gray-300 bg-[#F9F1E7]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Color</h3>
            <div className="flex space-x-3 mt-2">
              {[
                { color: "purple", bg: "bg-[#816DFA]" },
                { color: "black", bg: "bg-black" },
                { color: "gold", bg: "bg-brownMunday" },
              ].map(({ color, bg }) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor === color ? "border-gray-800" : "border-gray-300"
                  } ${bg}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={() => handleQuantityChange("decrement")} className="px-4 py-2 text-lg font-semibold">-</button>
              <span className="px-4 py-2 text-lg">{quantity}</span>
              <button onClick={() => handleQuantityChange("increment")} className="px-4 py-2 text-lg font-semibold">+</button>
            </div>
            <ShoppingCart  item={product}/>
          </div>

          <div className="border-b border-gray-200 mt-6 md:mr-[10rem]"></div>
          <div className="mt-6 text-sm text-gray-700">
            <p><strong>SKU</strong>: SS001</p>
            <p><strong>Category</strong>: Sofas</p>
            <p><strong>Tags</strong>: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
       {/* <div className="p-8  min-h-screen">
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
    </div> */}
    <div className="p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center border-t mb-6 pt-8 justify-center md:space-x-4">
          <button
            className={`text-lg font-semibold pb-2 px-4 ${
              tab === "description" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setTab("description")}
          >
            Description
          </button>
          <button
            className={`text-lg font-semibold pb-2 px-4 ${
              tab === "additional" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setTab("additional")}
          >
            Additional Information
          </button>
          <p className="text-lg font-semibold pb-2 px-4">Reviews [5]</p>
        </div>

        {tab === "description" && (
          <div className="px-4 md:px-14">
            <p className="text-gray-600 mb-8">
              Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p className="text-gray-600">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage-styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio, boasting a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine-tune the controls to your
              personal preferences, while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        )}

        {tab === "additional" && (
          <div className="px-4 md:px-14">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              a quidem veniam quia, adipisci enim necessitatibus? Consequuntur
              labore accusantium fugit quaerat rem, excepturi ex deserunt fuga
              non minima obcaecati.
            </p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

