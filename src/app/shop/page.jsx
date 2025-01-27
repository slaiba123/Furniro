"use client"
import React, { useState } from "react";
import Headershop from "@/components/ui/shop-component/Header";
import ItemsGrid from "@/components/ui/shop-component/ItemsGrid";
import SliderView from "@/components/ui/shop-component/ItemsSliders";

let items = [
  { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
  { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
  { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
  { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  { name: 'Grifo',description:'Night lamp', price: 'Rp 1,500,000', image: '/images/image 3.png' },
  { name: 'Muggo',description:'Small mug', price: 'Rp 6,000,000', image: '/images/image 5.png' },
  { name: 'Pingky',description:'cute bed set', price: 'Rp 3,000,000', image: '/images/image 6.png' },
  { name: 'Potty',description:'Stylish leather sofa', price: 'Rp 900,000', image: '/images/image 7.png' },
  { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
  { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
  { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
  { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  { name: 'Grifo',description:'Night lamp', price: 'Rp 1,500,000', image: '/images/image 3.png' },
  { name: 'Muggo',description:'Small mug', price: 'Rp 6,000,000', image: '/images/image 5.png' },
  { name: 'Pingky',description:'cute bed set', price: 'Rp 3,000,000', image: '/images/image 6.png' },
  { name: 'Potty',description:'Stylish leather sofa', price: 'Rp 900,000', image: '/images/image 7.png' },
  { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
  { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
  { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
  { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  { name: 'Grifo',description:'Night lamp', price: 'Rp 1,500,000', image: '/images/image 3.png' },
  { name: 'Muggo',description:'Small mug', price: 'Rp 6,000,000', image: '/images/image 5.png' },
  { name: 'Pingky',description:'cute bed set', price: 'Rp 3,000,000', image: '/images/image 6.png' },
  { name: 'Potty',description:'Stylish leather sofa', price: 'Rp 900,000', image: '/images/image 7.png' },
  { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
  { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
  { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
  { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  { name: 'Grifo',description:'Night lamp', price: 'Rp 1,500,000', image: '/images/image 3.png' },
  { name: 'Muggo',description:'Small mug', price: 'Rp 6,000,000', image: '/images/image 5.png' },
  { name: 'Pingky',description:'cute bed set', price: 'Rp 3,000,000', image: '/images/image 6.png' },
  { name: 'Potty',description:'Stylish leather sofa', price: 'Rp 900,000', image: '/images/image 7.png' }
];


const ShopPage = () => {
  const [layout, setLayout] = useState("grid"); 
  const [imgdisplay,setimgdisplay]=useState(16)
  const slicedItems = items.slice(0, imgdisplay);
  return (
    <div>
      
      <Headershop onLayoutChange={setLayout}  onimgchange={setimgdisplay} imgdisplay={imgdisplay}/>

      
      {layout === "grid" ? (
        <ItemsGrid items={slicedItems} />
      ) : (
        <SliderView items={slicedItems} />
      )}
    </div>
  );
};

export default ShopPage;
