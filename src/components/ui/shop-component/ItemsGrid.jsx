// import ItemsCard from '@/components/ui/shop-component/ItemsCard'
// import Pagination from '@/components/ui/paginaton'
// import Footer2 from '@/components/ui/Footer2';

// export default function ItemsGrid({ items }) {
//   return (
//     <section className="items-grid mt-12 ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mt-6 ml-9">
//         {items.map((items) => (
//           <ItemsCard key={items.name} items={items} />
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <Pagination totalPages={3} />
        
//       </div>
//       <Footer2/>

      
//     </section>
//   );
// }


import ItemsCard from '@/components/ui/shop-component/ItemsCard';
import Pagination from '@/components/ui/paginaton';
import Footer2 from '@/components/ui/Footer2';

export default function ItemsGrid({ items }) {
  if (typeof window !== "undefined" && window.innerWidth < 640) {
    return <p className='justify-center items-center p-8'>To view grid please switch to a larger screen.</p>; // Won't render anything on mobile
  }
   
      return (
        <section className="items-grid mt-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {items.map((item) => (
              <ItemsCard key={item.name} items={item} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Pagination totalPages={3} />
          </div>
          <Footer2 />
        </section>
     
    
    // <section className="items-grid mt-12 px-4 sm:px-6 lg:px-8">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
    //     {items.map((item) => (
    //       <ItemsCard key={item.name} items={item} />
    //     ))}
    //   </div>
    //   <div className="text-center mt-6">
    //     <Pagination totalPages={3} />
    //   </div>
    //   <Footer2 />
    // </section>
  );
}
