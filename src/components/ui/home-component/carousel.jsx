"use client";

import React, { useState } from "react";

const RoomInspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rooms = [
    {
      id: 1,
      title: "01 — Bed Room",
      name: "Inner Peace",
      image: "/images/carouselimg1.png",
    },
    {
      id: 2,
      title: "02 — Dining Room",
      name: "Elegant Space",
      image: "/images/carouselimg2.png",
    },
    {
      id: 3,
      title: "03 — Living Room",
      name: "Modern Comfort",
      image: "/images/collage5.png",
    },
    {
      id: 4,
      title: "04 — Study Room",
      name: "Productive Vibes",
      image: "/images/collage6.png",
    },
   
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % rooms.length);
  };

  

  const getIndices = () => {
    const first = currentIndex;
    const second = (currentIndex + 1) % rooms.length;
    const third = (currentIndex + 2) % rooms.length;
    return [first, second, third];
  };

  const visibleIndices = getIndices();

  return (
    <div className="flex items-center justify-center bg-[#FCF8F3] py-10 px-5 mt-7">
      <div className="max-w-7xl w-full grid grid-cols-3 gap-5">
        
        <div className="col-span-1 flex flex-col justify-center space-y-5 mr-10">
          <h1 className="text-3xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-brownMunday text-white py-2 px-4  font-medium hover:bg-yellow-600 transition mr-[12rem]">
            Explore More
          </button>
        </div>

        
        <div className="col-span-2 relative  ml-6">
          <div className="flex space-x-5 items-center">
            {visibleIndices.map((index, i) => (
              <div key={rooms[index].id} className="relative w-1/2">
                <img
                  src={rooms[index].image}
                  alt={rooms[index].name}
                  className=" shadow-lg w-full h-auto"
                />
                {i === 1 && (
                  <button
                    className="absolute -right-4  top-[60%] transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg "
                    onClick={handleNext}
                  >
                    <img src="/images/Arrow-right.png" alt="Next" />
                  </button>
                )}
              </div>
            ))}
          </div>
          


          <div className="relative bottom-[6rem] left-5">
            <div className="absolute bg-white bg-opacity-50 p-4 shadow-lg h-[5rem] w-[10rem]">
              <h2 className="text-sm text-gray-500">
                {rooms[currentIndex].title}
              </h2>
              <h3 className="text-md font-bold text-gray-800">
                {rooms[currentIndex].name}
              </h3>
            </div>
            <div className="absolute bg-brownMunday w-10 h-10  flex items-center justify-center left-[10rem] top-10">
            <div className=" w-10 h-10 flex items-center justify-center ">
            <p className="text-white text-xl">&rarr;</p>
            </div>
            </div>
          </div>


          
          <div className="col-span-1 relative flex justify-center  mt-10 mr-[12rem] ">
          <div className="absolute flex space-x-2 bottom-5">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`w-3 h-3 rounded-full border border-brownMunday ${
                  currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
