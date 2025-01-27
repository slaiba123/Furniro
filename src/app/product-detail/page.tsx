import ProductGrid from '@/components/ui/home-component/ProductGrid'
import ProductDetail from '@/components/ui/shop-component/product-detail'
const products = [
    { name: 'Sytherine', description:'Stylish cafe chair',price: 'Rp 2,500,000', image: '/images/image 4.png' },
    { name: 'Levolosa',description:'Stylish cafe chair', price: 'Rp 3,000,000', image: '/images/image 1.png' },
    { name: 'Lolito',description:'Luxury big sofa', price: 'Rp 7,000,000', image: '/images/image 1.png' },
    { name: 'Respira',description:'Outdoor bar table and stool', price: 'Rp 5,000,000', image: '/images/image 2.png' },
  ];
  const title="Related Products";
const page = () => {
  return (
    <main>
    <ProductDetail/>
    <ProductGrid products={products} title={title}/>

    </main>
  )
}

export default page