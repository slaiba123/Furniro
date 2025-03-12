import ProductCard from '@/components/ui/home-component/ProductCard';

export default function ProductGrid({products, title}) {
  return (
    <section className="product-grid mt-8 md:mt-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#3A3A3A]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16 place-items-center">
        {products.map((product) => (
          <div className="flex justify-center w-full">
            <ProductCard key={product.name} product={product} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4 md:mt-6">
        <button className="px-4 py-2 md:px-6 md:py-3 bg-transparent text-brownMunday border-2 border-brownMunday w-full max-w-xs sm:w-48 md:w-56 lg:w-60 hover:bg-brownMunday hover:text-white text-sm md:text-base">Show More</button>
      </div>
    </section>
  );
}