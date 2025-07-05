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

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getIndices = () => {
    const first = currentIndex;
    const second = (currentIndex + 1) % rooms.length;
    const third = (currentIndex + 2) % rooms.length;
    return [first, second, third];
  };

  const visibleIndices = getIndices();

  return (
    <div className="flex items-center justify-center bg-[#FCF8F3] py-6 md:py-10 px-4 md:px-5 mt-4 md:mt-7">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 flex flex-col justify-center space-y-3 md:space-y-5 md:mr-10 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="self-center md:self-start bg-brownMunday text-white py-2 px-4 font-medium hover:bg-yellow-600 transition md:mr-[12rem]">
            Explore More
          </button>
        </div>
       
        <div className="col-span-2 relative md:ml-6 mt-6 md:mt-0">
          <div className="flex space-x-2 md:space-x-5 items-center">
            {visibleIndices.map((index, i) => (
              <div key={rooms[index].id} className="relative w-1/2">
                <img
                  src={rooms[index].image}
                  alt={rooms[index].name}
                  className="shadow-lg w-full h-auto"
                />
                {i === 1 && (
                  <button
                    className="absolute -right-2 md:-right-4 top-[50%] md:top-[60%] transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 md:p-2 hover:shadow-lg"
                    onClick={handleNext}
                  >
                    <img src="/images/Arrow-right.png" alt="Next" className="w-4 md:w-auto" />
                  </button>
                )}
              </div>
            ))}
          </div>
         
          <div className=" hidden md:block relative bottom-[4rem] md:bottom-[6rem] left-2 md:left-5">
            <div className="absolute bg-white bg-opacity-50 p-2 md:p-4 shadow-lg h-[4rem] md:h-[5rem] w-[10rem] md:w-[12rem]">
              <h2 className="text-xs md:text-sm text-gray-500 truncate">
                {rooms[currentIndex].title}
              </h2>
              <h3 className="text-sm md:text-md font-bold text-gray-800 truncate">
                {rooms[currentIndex].name}
              </h3>
            </div>
            <div className="absolute bg-brownMunday w-8 h-8 md:w-10 md:h-10 flex items-center justify-center left-[8rem] md:left-[12rem] top-8 md:top-10">
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                <p className="text-white text-base md:text-xl">&rarr;</p>
              </div>
            </div>
          </div>
         
          <div className="col-span-1 relative flex justify-center mt-10  md:mr-[12rem]" >
            <div className="absolute flex  space-x-2 bottom-5">
              {rooms.map((room, index) => (
                <div
                  key={room.id}
                  className={`w-2 h-2 md:w-3 md:h-3  rounded-full border border-brownMunday ${
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