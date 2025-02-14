import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const reviews = [
  {
    name: "Yatharth",
    title: "GYM CITY - Natural Bodybuilding",
    review:
      "I recently made a purchase on Nutrabay.com and I have to say, I'm impressed with the genuine products and fast service. I feel confident in my purchase and will definitely be ordering from Nutrabay again.",
    rating: 5,
    img: "img/y1.png",
  },
  {
    name: "Pratik Gupta",
    title: "International Medalist in Rowing",
    review:
      "Nutrabay sells genuine products, I have been a part of nutrabay family for almost 2.5 years now and it has never disappointed me.",
    rating: 5,
    img: "https://cdn2.nutrabay.com/images/pratikGupta.png",
  },
  {
    name: "Monika Lamba",
    title: "Fitness Influencer",
    review:
      "I have been using Nutrabay.com for several months now, and I'm always blown away by how fast their shipping is.",
    rating: 5,
    img: "https://cdn2.nutrabay.com/images/monikaLamba.png",
  },
  {
    name: "Rahul Sharma",
    title: "Athlete",
    review:
      "Great service and genuine products. I trust Nutrabay for all my supplement needs.",
    rating: 5,
    img: "https://cdn2.nutrabay.com/images/gautam.png",
  },
  {
    name: "Simran Kaur",
    title: "Wellness Coach",
    review:
      "Superb product quality and delivery service. Highly recommended!",
    rating: 5,
    img: "https://cdn2.nutrabay.com/images/monikaLamba.png",
  },
  {
    name: "Aman Verma",
    title: "Gym Trainer",
    review:
      "Always satisfied with my purchases from Nutrabay. Best deals and fast shipping!",
    rating: 5,
    img: "https://cdn2.nutrabay.com/images/gautam.png",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 2 }, // Now 2 items per row on mobile screens
          0: { slidesPerView: 1 }, // Fallback for very small screens
        }}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="bg-white p-5 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={review.img}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-bold rajdhani-font">{review.name}</h3>
              <p className="text-green-600 text-sm">{review.title}</p>
              <div className="flex text-yellow-400 my-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-900 text-md text-center mb-3 text-justify rajdhani-font">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;