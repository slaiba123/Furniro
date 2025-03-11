// // 'use client'
// // import React, { useState } from "react";
// // import Headershop from "@/components/ui/shop-component/Header";
// // import ItemsGrid from "@/components/ui/shop-component/ItemsGrid";
// // import SliderView from "@/components/ui/shop-component/ItemsSliders";



// // export default  function ShopPage (items) {

// //   const [layout, setLayout] = useState("grid"); 
// //   const [imgdisplay,setimgdisplay]=useState(16)
// //   const slicedItems = items.slice(0, imgdisplay);
// //   return (
// //     <div>
      
// //       <Headershop onLayoutChange={setLayout}  onimgchange={setimgdisplay} imgdisplay={imgdisplay}/>

      
// //       {layout === "grid" ? (
// //         <ItemsGrid items={slicedItems} />
// //       ) : (
// //         <SliderView items={slicedItems} />
// //       )}
// //     </div>
// //   );
// // };

// 'use client'

// import React, { useState } from "react";
// import Headershop from "@/components/ui/shop-component/Header";
// import ItemsGrid from "@/components/ui/shop-component/ItemsGrid";
// import SliderView from "@/components/ui/shop-component/ItemsSliders";

// export default function ShopClient({ initialItems }) {
//   const [layout, setLayout] = useState("grid");
//   const [imgdisplay, setimgdisplay] = useState(16);
  
//   // Ensure initialItems is always treated as an array
//   const items =initialItems;
//   console.log('ini',initialItems)
//   const slicedItems = items.slice(0, imgdisplay);
//   console.log(slicedItems)
  
//   return (
//     <div>
//       <Headershop 
//         onLayoutChange={setLayout} 
//         onimgchange={setimgdisplay} 
//         imgdisplay={imgdisplay}
//       />
//       {layout === "grid" ? (
//         <ItemsGrid items={slicedItems} />
//       ) : (
//         <SliderView items={slicedItems} />
//       )}
//     </div>
//   );
// }

import { client } from '@/sanity/lib/client'
import ShopClient from './server-shop' // Import from a separate file

export default async function ShopPage() {
  const items = await client.fetch(`
    *[_type == "product"] {
      name,
      description,
      price,
      isFeatured,
      "image": image.asset->url
    }
  `);
 
  // Simple typecast to array
  const itemsArray = [...items];
  console.log('Server component items:', itemsArray);
 
  return <ShopClient initialItems={itemsArray} />;
}
