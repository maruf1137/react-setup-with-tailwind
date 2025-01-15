import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const companyLogos = [
    { id: 1, src: "/images/company1.png", alt: "Company 1" },
    { id: 2, src: "/images/company2.png", alt: "Company 2" },
    { id: 3, src: "/images/company3.png", alt: "Company 3" },
    { id: 4, src: "/images/company4.png", alt: "Company 4" },
    { id: 5, src: "/images/company5.png", alt: "Company 5" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 mb-10 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        className="w-full relative">
        {companyLogos.map((logo) => (
          <SwiperSlide key={logo.id} className="">
            <div className="flex items-center flex-col md:flex-row gap-y-5 gap-x-16 max-w-[962px] mx-auto w-full py-5 lg:leading-[47px]">
              <img
                src="/public/images/home/testimonial-img-1.png"
                alt=""
                className="h-32 w-32 object-contain"
              />
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-center md:text-left">
                  {`"With Techstyles, I can manage clients, projects, and finances
                  in one place. It’s the perfect tool for any design business."`}
                </h2>
                <p className="name text-2xl text-dark mt-8">Roxi Z</p>
                <p className="name text-base text-dark text-opacity-40">
                  Souq.Studio
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-8 right-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-16 md:right-[72px] flex items-center gap-5 z-10">
        <div className="group swiper-button-prev hadow-white-volume flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-transparent text-dark border border-[#E6E5DB] hover:bg-dark hover:text-white hover:border-dark transition-all after:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="!h-7 !w-7"
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 12h16m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </div>
        <div className="group swiper-button-next shadow-white-volume flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-dark bg-transparent text-dark border border-[#E6E5DB] hover:bg-dark hover:text-white hover:border-dark transition-all after:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="!h-7 !w-7"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
