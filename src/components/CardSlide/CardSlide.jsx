import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";

import "swiper/css";
import "swiper/css/autoplay";

import s from "./CardSlide.module.scss";
import "@/scss/base/_cardSlide.scss"

export const CardSlide = () => {
  const { data, isLoading, isError } = useProducts(25);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <section className={s.containerSlider}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          834: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <img
              className={s.slideImage}
              loading="lazy"
              src={product.image}
              alt={product.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
