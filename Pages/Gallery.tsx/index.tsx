import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: ImageProps[] = [
    { src: "/images/image-1.JPG", alt: "Gallery Image 1" },
    { src: "/images/image-2.JPG", alt: "Gallery Image 2" },
    { src: "/images/image-3.jpeg", alt: "Gallery Image 3" },
    { src: "/images/image-4.jpeg", alt: "Gallery Image 4" },
    { src: "/images/gallery9.JPEG", alt: "Gallery Image 5" },
    { src: "/images/gallery10.JPEG", alt: "Gallery Image 6" },
    { src: "/images/shain-portrait.jpg", alt: "Shain Davis Portrait" },
    { src: "/images/shain-wife.jpg", alt: "Cynthia Davis Portrait" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#c3c2bd]">
      <h2 className="text-2xl font-army text-[#ab7552] font-bold mb-6 hover:text-white">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover border-2 border-[#ab7552] transition-transform duration-300 hover:scale-105 rounded-lg"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 15px 20px -15px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
