import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export function BannerSlider({ sliders }) {
  return (
    <div className="relative w-full mx-auto">
      {sliders?.map((slider, index) => (
        <Link href={slider.button_url} key={index} className="w-full">
          <div className="relative w-full !min-h-[300px] !sm:min-h-[350px] !md:min-h-[400px] !lg:min-h-[450px] !xl:min-h-[500px]">
            <Image
              src={slider.image}
              alt={`Banner slider image ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
