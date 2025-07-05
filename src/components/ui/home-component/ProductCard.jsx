"use client"
import Link from "next/link";
import { addToCart } from "@/app/store/slices/cartSlice";
import {useDispatch } from "react-redux";
import { setSelectedProduct } from "@/app/store/slices/productSlice";
export default function ProductCard({ product }) {
    const dispatch=useDispatch();
    const handleProductSelect = (product) => {
     
      dispatch(setSelectedProduct(product));
    };
    return (
      <div className="product-card  p-4 w-[20rem]">
       
        <div className=" bg-[#F4F5F7]  pb-2 h-[33rem]">
        <div className="relative w-72 h-[25rem]">
      <img src={product.image} alt={product.name} className=" w-full h-[25rem]" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="m-2 px-10 py-2 text-brownMunday bg-white "
              onClick={() => dispatch( addToCart(product))}
              >Add to Cart</button>
              <div className="flex flex-row">
              <button className="m-2 px-4 py-2 text-white  rounded flex ml-[1rem] mr-[8rem] "><img src="/images/share.png " className="mt-1.5 mr-[0.2rem]" alt="" />Share</button>
              <button className="m-2 px-4 py-2 text-white  rounded flex mr-[2rem]"><img src="/images/Like.png" className="mt-1.5 mr-[0.2rem]" alt="" />Like</button>
              </div>
          </div>
          </div>
          <Link 
                  href={`/product-detail?id=${product.id}`} 
                  onClick={() => handleProductSelect(product)}
                >
                <h3 className="mt-4  px-3 text-[#3A3A3A] text-xl font-bold">{product.name}</h3>

                </Link>        <h2 className="my-1  px-3 text-[#898989] text-sm ">{product.description}</h2>
        <p className="text-[#3A3A3A] px-3 font-bold">Rp:{product.price.toLocaleString()}</p>
        </div>
        
       
      </div>
    );
  }
  