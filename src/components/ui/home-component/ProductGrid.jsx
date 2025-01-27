import ProductCard from '@/components/ui/home-component/ProductCard';



export default function ProductGrid({products,title}) {
  return (
    <section className="product-grid mt-12">
      <h2 className="text-4xl font-bold text-center text-[#3A3A3A]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-6 mt-6 mx-16 mr-2">

        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="px-6 py-3 bg-transparent text-brownMunday border-2 border-brownMunday w-[15rem] hover:bg-brownMunday hover:text-white">Show More</button>
      </div>
    </section>
  );
}
