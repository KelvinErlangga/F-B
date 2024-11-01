"use client";
import React, { useEffect, useRef, useState } from "react";
import reviews from "../data/reviewData";

export default function Review() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const autoScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Jika scroll sudah mencapai akhir, kembali ke awal
      if (scrollLeft + clientWidth >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (!isPaused) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 3000); // Bergerak setiap 3 detik
    return () => clearInterval(interval); // Bersihkan interval saat unmounted
  }, [isPaused]);

  return (
    <section id="reviews" className="py-12 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Customer <span className='font-normal'>Reviews</span></h2>
        <div className="relative">
          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-4 py-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white text-black rounded-lg p-4 flex-shrink-0 w-80"
                onMouseEnter={() => setIsPaused(true)} // Set isPaused true saat hover
                onMouseLeave={() => setIsPaused(false)} // Set isPaused false saat mouse keluar
              >
                <img src={review.profilePic} alt={review.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="mb-2">{review.comment}</p>
                <div className="flex justify-center">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
