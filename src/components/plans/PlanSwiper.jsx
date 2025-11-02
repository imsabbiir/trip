"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


import "swiper/css";
import "swiper/css/navigation";
import PlanCard from "./PlanCard";

export default function PlanSwiper({ plans }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="absolute -top-18 right-5 flex gap-2 z-20">
        <div
          ref={prevRef}
          className="w-10 h-10 md:w-11 md:h-11 bg-[#0077B6] hover:bg-[#00B4D8] rounded-full flex items-center justify-center text-lg md:text-xl text-white cursor-pointer shadow-lg transition"
        >
          <IoIosArrowBack />
        </div>
        <div
          ref={nextRef}
          className="w-10 h-10 md:w-11 md:h-11 bg-[#0077B6] hover:bg-[#00B4D8] rounded-full flex items-center justify-center text-lg md:text-xl text-white cursor-pointer shadow-lg transition"
        >
          <IoIosArrowForward />
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          0: { slidesPerView: 1, slidesPerGroup: 1 },
        }}
      >
        {plans.map((plan) => (
          <SwiperSlide key={plan._id}>
            <div
              className="h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden relative cursor-pointer bg-cover bg-center group"
              style={{ backgroundImage: `url(${plan.image})` }}
            >
              <PlanCard plan={plan} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
