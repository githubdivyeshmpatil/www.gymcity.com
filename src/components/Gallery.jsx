import React, { useState } from "react";

const images = [
  "/img/g1 (1).jpeg", "/img/g1 (2).jpeg", "/img/g1 (3).jpeg", "/img/g1 (4).jpeg",
  "/img/g1 (5).jpeg", "/img/g1 (6).jpeg", "/img/g1 (7).jpeg", "/img/g1 (8).jpeg",
  "/img/g1 (9).jpeg", "/img/g1 (10).jpeg", "/img/g1 (11).jpeg", "/img/g1 (12).jpeg",
  "/img/g1 (13).jpeg", "/img/g1 (14).jpeg", "/img/g1 (15).jpeg", "/img/g1 (16).jpeg",
  "/img/g1 (17).jpeg", "/img/g1 (18).jpeg", "/img/g1 (19).jpeg", "/img/g1 (20).jpeg"
];

const hoverImages = [
  "/img/g1 (21).jpeg", "/img/g1 (22).jpeg", "/img/g1 (23).jpeg", "/img/g1 (24).jpeg",
  "/img/g1 (25).jpeg", "/img/g1 (26).jpeg", "/img/g1 (27).jpeg", "/img/g1 (28).jpeg",
  "/img/g1 (29).jpeg", "/img/g1 (30).jpeg", "/img/g1 (1).jpeg", "/img/g1 (2).jpeg",
  "/img/g1 (3).jpeg", "/img/g1 (4).jpeg", "/img/g1 (5).jpeg", "/img/g1 (6).jpeg",
  "/img/g1 (7).jpeg", "/img/g1 (8).jpeg", "/img/g1 (9).jpeg", "/img/g1 (20).jpeg"
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto px-4 py-10">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={hoveredIndex === index ? hoverImages[index] : src}
              alt={`Gym ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;