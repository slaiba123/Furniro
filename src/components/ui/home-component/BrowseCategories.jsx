export default function BrowseCategories() {
    const categories = ['Dining', 'Living', 'Bedroom'];
    return (
      <section className="browse-categories mt-10 text-center">
        <h2 className="text-2xl font-bold ">Browse The Range</h2>
        <p className="mt-2 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-center mt-6 gap-4">
          {categories.map((category) => (
            <div key={category} className="category-card p-4 ">
              <img src={`/images/${category}.png`} alt={category} className="rounded-lg" />
              <h3 className="mt-2 text-xl  font-semibold text-[#333333]">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  