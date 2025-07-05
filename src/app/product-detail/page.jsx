import ProductGrid from '@/components/ui/home-component/ProductGrid'
import ProductDetail from '@/components/ui/shop-component/product-detail'
import { client } from '@/sanity/lib/client'

const title="Related Products";
export default async function page ()  {
  const products = await client.fetch(`
  *[_type == "product"] {
    name,
    description,
    price,
    isFeatured,
    "image": image.asset->url
  }
  
`)
;
  return (
    <main>
    <ProductDetail  />
    <ProductGrid products={products} title={title}/>

    </main>
  )
}

