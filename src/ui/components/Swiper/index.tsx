"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import AdveraImage from "@public/images/Advera.jpg";
import AzbaImage from "@public/images/azba.png";
import AZGSImage from "@public/images/azerbaijanGorundServices.jpg";
import AzinvesttechImage from "@public/images/Azinvesttech.png";
import ConstructionEngImage from "@public/images/constructionEng.png";
import RentalServicesImage from "@public/images/rentalservices.png";

export default function SwiperComponent() {
  const images = [
    AdveraImage,
    AzbaImage,
    AZGSImage,
    AzinvesttechImage,
    ConstructionEngImage,
    RentalServicesImage,
  ];
  return (
    <Swiper
      modules={[Autoplay, FreeMode, Mousewheel]}
      spaceBetween={0}
      slidesPerView={5}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={4000}
      mousewheel={false}
      className="[&>.swiper-wrapper]:!ease-linear"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="my-20 h-[100px] w-[182px] flex items-center justify-center">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={182}
              height={100}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
