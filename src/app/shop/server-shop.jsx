'use client'
import React, { useState } from "react";
import Headershop from "@/components/ui/shop-component/Header";
import ItemsGrid from "@/components/ui/shop-component/ItemsGrid";
import SliderView from "@/components/ui/shop-component/ItemsSliders";

export default function ShopClient({ initialItems }) {
  const [layout, setLayout] = useState("grid");
  const [imgdisplay, setimgdisplay] = useState(16);
 

  const items = initialItems || [];
  console.log('Client component initialItems:', initialItems);
 
  const slicedItems = items.slice(0, imgdisplay);
  console.log('Sliced items:', slicedItems);
 
  return (
    <div>
      <Headershop
        onLayoutChange={setLayout}
        onimgchange={setimgdisplay}
        imgdisplay={imgdisplay}
      />
      {layout === "grid" ? (
        <ItemsGrid items={slicedItems} />
      ) : (
        <SliderView items={slicedItems} />
      )}
    </div>
  );
}