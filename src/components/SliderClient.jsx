"use client";
import { useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function SliderClient({ destinations }) {
  const router = useRouter();
  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    if (slide && slide.children.length > 0) {
      slide.appendChild(slide.children[0]);
    }
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    if (slide && slide.children.length > 0) {
      slide.prepend(slide.children[slide.children.length - 1]);
    }
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
        <div
          ref={slideRef}
          className="slide flex transition-transform duration-500 ease-in-out"
        >
          {destinations.map((destination) => {
            return (
              <div
                key={destination._id}
                className="item flex-shrink-0 bg-cover bg-center transition duration-500"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="absolute inset-0 bg-[#00000088] z-10 overlay"></div>
                <div className="content absolute bottom-10 left-10  p-4 rounded z-10">
                  <h1 className="title text-7xl font-bold text-white">{destination?.title}</h1>
                  <h2 className="subtitle text-xl mt-2 tracking-widest">{destination?.subtitle}</h2>
                  <p className="description text-lg w-1/2 leading-7 pt-5 text-[#d9d9d9] line-clamp-3">
                    {destination?.description}
                  </p>
                  <button onClick={()=>router.push(`/destinations/${destination?._id}`)} className="explore-button px-5 py-2.5 bg-white  text-[#555] rounded-sm cursor-pointer">Explore Now</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="buttons">
          <button
            onClick={handlePrev}
            className="bg-white w-12 h-12 flex items-center justify-center rounded-sm text-2xl"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="bg-white w-12 h-12 flex items-center justify-center rounded-sm text-2xl"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
  );
}
