"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const images = ["/carousel1.jpg", "/carousel3.jpg", "/carousel4.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentSlide]); // Dependency array includes currentSlide to avoid stale closures

  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover" // Ensuring the image covers the full width and height
          />
          <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Welcome to Mr. Suprek</h1>
              <p className="mt-4 text-lg">Delicious and crispy fried chicken served fresh every day.</p>
              <button className="mt-6 bg-accent text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
