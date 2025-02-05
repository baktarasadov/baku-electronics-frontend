// "use client";
// import { Button } from "@/common/components";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export function Carousel({
//   children: slides,
//   autoSlide = false,
//   autoSlideInterval = 2000,
// }) {
//   const [curr, setCurr] = useState(0);
//   const totalSlides = slides.length;

//   const prev = () => {
//     setCurr((curr) => (curr > 0 ? curr - 1 : 0));
//   };

//   const next = () => {
//     setCurr((curr) => (curr < totalSlides - 2 ? curr + 1 : 0));
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     const slideInterval = setInterval(next, autoSlideInterval);
//     return () => clearInterval(slideInterval);
//   }, [autoSlide, autoSlideInterval, totalSlides]);

//   return (
//     <div className="w-full">
//       <div className="overflow-hidden relative ">
//         <div
//           className="flex transition-transform ease-out duration-500  relative -translate-x-4 "
//           style={{ transform: `translateX(-${curr * 75}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`${
//                 index == slide.length - 1 ? "w-full" : "w-full md:w-[75%] "
//               } flex-shrink-0 px-0 md:px-4 `}
//             >
//               {slide}
//             </div>
//           ))}
//         </div>
//         <Button
//           onClick={prev}
//           className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
//         >
//           <Image src="/images/icons/left-arrow.svg" width={24} height={24} />
//         </Button>
//         <Button
//           onClick={next}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10"
//         >
//           <Image src="/images/icons/right-arrow.svg" width={24} height={24} />
//         </Button>
//       </div>
//     </div>
//   );
// }

// export const BannerSlider = () => {
//   const slides = [
//     {
//       id: 1,
//       imageUrl: "https://img.b-e.az/media/page/slider/İpad923x520_7ZJkJdw.jpg",
//     },
//     {
//       id: 2,
//       imageUrl: "https://img.b-e.az/media/page/slider/923x520_q6VinV0.jpg",
//     },
//     {
//       id: 3,
//       imageUrl: "https://img.b-e.az/media/page/slider/923x520_q6VinV0.jpg",
//     },
//   ];

//   return (
//     <div className="text-center w-full overflow-hidden">
//       <Carousel>
//         {slides.map((slide) => (
//           <img key={slide.id} src={slide.imageUrl} className="w-full" />
//         ))}
//       </Carousel>
//     </div>
//   );
// };
