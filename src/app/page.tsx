import BrowseCategories from '@/components/ui/home-component/BrowseCategories';
import ProductGrid from '@/components/ui/home-component/ProductGrid';
import Intro from '@/components/ui/home-component/Intro';
import RoomInspiration from '@/components/ui/home-component/carousel';
import {client} from '@/sanity/lib/client'
const title="Our Products";
export default async function HomePage() {
const products = await client.fetch(`
  *[_type == "product"] {
    name,
    description,
    price,
    isFeatured,
    "image": image.asset->url
  }
`);
  
  return (
    <main>
      <Intro/>
      <BrowseCategories />
      <ProductGrid products={products} title={title}/>
      <RoomInspiration/>
      <img src="/images/homediv.png" alt="" className=' p-2 md:p-[3rem]'/>
    </main>
  );
}
