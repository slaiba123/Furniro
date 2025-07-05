export default function BrowseCategories() {
  const categories = ['Dining', 'Living', 'Bedroom'];
  return (
    <section className="browse-categories mt-6 md:mt-10 text-center px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333]">
        Browse The Range
      </h2>
      <p className="mt-2 text-sm md:text-base text-[#666666] max-w-md mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div 
            key={category} 
            className="category-card p-2 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <img 
                src={`/images/${category}.png`} 
                alt={category} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-2 md:mt-4 text-base md:text-xl font-semibold text-[#333333]">
              {category}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
  