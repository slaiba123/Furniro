// import React from "react";
// import Pagination from '@/components/ui/paginaton'
// import Footer2 from '@/components/ui/Footer2';
// const SliderView = ({ items }) => {
//   return (
//     <div>
//     <div className="slider-container items-center  overflow-y-scroll flex flex-col whitespace-nowrap">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="inline-block p-4 w-[300px] bg-white  m-2"
//         >
          
// <div className="product-card  p-4 w-[20rem]">
       
//        <div className="bg-[#F4F5F7] pb-1 h-[32rem]">
//        <div className="relative w-72 h-[25rem]">
//        <img src={item.image} alt={item.name} className=" w-[30rem] h-[25rem]" />
//        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                <button className="m-2 px-10 py-2 text-brownMunday bg-white ">Add to Cart</button>
//                <div className="flex flex-row">
//                <button className="m-2 px-4 py-2 text-white  rounded flex ml-[1rem] mr-[8rem] "><img src="/images/share.png " className="mt-1.5 mr-[0.2rem]" alt="" />Share</button>
//                <button className="m-2 px-4 py-2 text-white  rounded flex mr-[2rem]"><img src="/images/Like.png" className="mt-1.5 mr-[0.2rem]" alt="" />Like</button>
//                </div>
//            </div>
//            </div>
//        <h3 className="mt-4  px-3 text-[#3A3A3A] text-xl font-bold">{item.name}</h3>
//        <h2 className="my-1  px-3 text-[#898989] text-sm ">{item.description}</h2>
//        <p className="text-[#3A3A3A] px-3 font-bold">{item.price}</p>
//        </div>
//        </div>
          
//         </div>
//       ))}
      
//     </div>
//     <div className="text-center mt-6">
//     <Pagination totalPages={3} />
    
//   </div>
//   <Footer2/>
//   </div>
//   );
// };

// export default SliderView;


import React from "react";
import Pagination from '@/components/ui/paginaton';
import Footer2 from '@/components/ui/Footer2';

const SliderView = ({ items }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="slider-container flex flex-col items-center overflow-y-scroll max-h-[80vh] space-y-4 py-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-none  "
          >
            <div className="product-card p-4">
              <div className="bg-[#F4F5F7] pb-1">
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover "
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="m-2 px-6 py-2 text-brownMunday bg-white rounded">Add to Cart</button>
                    <div className="flex space-x-4">
                      <button className="m-2 px-3 py-2 text-white flex items-center">
                        <img src="/images/share.png" className="w-5 h-5 mr-2" alt="" /> Share
                      </button>
                      <button className="m-2 px-3 py-2 text-white flex items-center">
                        <img src="/images/Like.png" className="w-5 h-5 mr-2" alt="" /> Like
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 px-3 text-[#3A3A3A] text-lg font-bold">{item.name}</h3>
                <h2 className="my-1 px-3 text-[#898989] text-sm">{item.description}</h2>
                <p className="text-[#3A3A3A] px-3 font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Pagination totalPages={3} />
      </div>
      <Footer2 />
    </div>
  );
};

export default SliderView;