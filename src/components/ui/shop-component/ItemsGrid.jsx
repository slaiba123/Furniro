import ItemsCard from '@/components/ui/shop-component/ItemsCard'
import Pagination from '@/components/ui/paginaton'
import Footer2 from '@/components/ui/Footer2';

export default function ItemsGrid({ items }) {
  return (
    <section className="items-grid mt-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mt-6 ml-9">
        {items.map((items) => (
          <ItemsCard key={items.name} items={items} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Pagination totalPages={3} />
        
      </div>
      <Footer2/>

      
    </section>
  );
}
