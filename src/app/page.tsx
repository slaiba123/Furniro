import BrowseCategories from '@/components/ui/home-component/BrowseCategories';
import ProductGrid from '@/components/ui/home-component/ProductGrid';
import Intro from '@/components/ui/home-component/Intro';
import RoomInspiration from '@/components/ui/home-component/carousel';

const products = [
  { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
  { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
  { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
  { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  { name: 'Grifo',description:'Night lamp', price: 'Rp 1,500,000', image: '/images/image 3.png' },
  { name: 'Muggo',description:'Small mug', price: 'Rp 6,000,000', image: '/images/image 5.png' },
  { name: 'Pingky',description:'cute bed set', price: 'Rp 3,000,000', image: '/images/image 6.png' },
  { name: 'Potty',description:'Stylish leather sofa', price: 'Rp 900,000', image: '/images/image 7.png' },
];
const title="Our Products";
export default function HomePage() {
  return (
    <main>
      <Intro/>
      <BrowseCategories />
      <ProductGrid products={products} title={title}/>
      <RoomInspiration/>
      <img src="/images/homediv.png" alt="" className='p-[3rem]'/>
    </main>
  );
}
