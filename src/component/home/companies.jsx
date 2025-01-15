// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Companies = () => {
  const companyLogos = [
    { id: 1, src: "/public/images/home/company-1.png", alt: "Company 1" },
    { id: 2, src: "/public/images/home/company-2.png", alt: "Company 2" },
    { id: 3, src: "/public/images/home/company-3.png", alt: "Company 3" },
    { id: 4, src: "/public/images/home/company-4.png", alt: "Company 4" },
    { id: 5, src: "/public/images/home/company-5.png", alt: "Company 5" },
    { id: 5, src: "/public/images/home/company-6.png", alt: "Company 5" },
    { id: 5, src: "/public/images/home/company-7.png", alt: "Company 5" },
    { id: 5, src: "/public/images/home/company-8.png", alt: "Company 5" },
    { id: 5, src: "/public/images/home/company-1.png", alt: "Company 5" },
    { id: 5, src: "/public/images/home/company-2.png", alt: "Company 5" },
  ];

  return (
    <div className="companies mx-auto max-w-7xl px-4 py-16">
      <p className="text-center text-lighter text-base">
        Trusted by leading designers
      </p>
      <div className="wrapper relative">
        <div className="overlay left-overlay md:w-1/2 xl:w-full"></div>
        <div className="overlay right-overlay lg:w-1/2 xl:w-full"></div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={10}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full mt-5">
          {companyLogos.map((logo) => (
            <SwiperSlide
              key={logo.id}
              className="flex justify-center items-center"
              style={{ width: "auto" }} // Allow auto width for slides
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[84px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Companies;
