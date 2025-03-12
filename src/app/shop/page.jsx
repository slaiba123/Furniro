import { client } from '@/sanity/lib/client'
import ShopClient from './server-shop' 

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
 
 
  const itemsArray = [...items];
  console.log('Server component items:', itemsArray);
 
  return <ShopClient initialItems={itemsArray} />;
}
