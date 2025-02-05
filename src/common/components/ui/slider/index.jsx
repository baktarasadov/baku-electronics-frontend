"use client";
import { useState } from "react";
import { Button } from "@/common/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative w-[95%] ">
        <div className="relative w-full  overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700  "
            style={{ transform: `translateX(-${currentIndex * 80}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="m-w-full h-[520px]  mx-2 relative "
              >
                <Image src={slide.image} alt={slide.title} layout="fill" />
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={prevSlide}
          className="absolute z-[1000] left-[-25px] top-1/2 -translate-y-1/2 p-2 rounded-[12px] bg-white h-[50px] w-[50px]"
        >
          <Image src="left-arrow.svg" width={24} height={24} />
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute z-[1000] right-[-25px] top-1/2 -translate-y-1/2 p-2 rounded-[12px] bg-white h-[50px] w-[50px]"
        >
          <Image src="right-arrow.svg" width={24} height={24} />
        </Button>
      </div>
    </>
  );
}
