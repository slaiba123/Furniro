import React from 'react';
const images = [
    { src: 'images/collage2.png', alt: 'Dining Area' },
    { src: 'images/collage3.png', alt: 'Bedroom' },
    { src: 'images/collage4.png', alt: 'Reading Nook' },
    { src: 'images/collage5.png', alt: 'Minimalist Setup' },
    { src: 'images/collage6.png', alt: 'Kitchen' },
    { src: 'images/collage7.png', alt: 'Framed Picture' },
  ];
const ImagesCollage = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4">
      <h1 className="text-center text-xl font-bold mb-4">
        Share your setup with 
      </h1>
      
      <h1>
      #FuniroFurniture
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="col-span-1">
            <img src={image.src} alt={image.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesCollage;
