"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/common/components";

export function BannerSlider({ sliders }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dual-slider-container container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        observer={true}
        observeParents={true}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop
        className="dual-swiper "
      >
        {sliders?.map((slider, index) => (
          <SwiperSlide key={index + slider.image} className="dual-slide">
            <Link href={slider.button_url} className="slide-link ">
              <Image
                src={slider.image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button className="prev nav-button">
        <div className="nav-icon ">
          <Image
            src="/images/icons/left-arrow.svg"
            layout="fill"
            alt="Previous"
            className=""
          />
        </div>
      </Button>
      <Button className="next nav-button ">
        <div className="nav-icon ">
          <Image
            src="/images/icons/right-arrow.svg"
            layout="fill"
            alt="Next"
            className=""
          />
        </div>

      </Button>
    </div>
  );
}
