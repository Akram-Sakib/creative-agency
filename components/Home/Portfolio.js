import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import carousel1 from './../../images/carousel-1.png';
import carousel2 from './../../images/carousel-2.png';
import carousel3 from './../../images/carousel-3.png';
import carousel4 from './../../images/carousel-4.png';
import carousel5 from './../../images/carousel-5.png';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Image width={400} height={300} src={carousel1} alt="" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={300} src={carousel2} alt="" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={300} src={carousel3} alt="" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={300} src={carousel4} alt="" priority />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={400} height={300} src={carousel5} alt="" priority />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Portfolio;
