import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "@/hooks/useProducts";


import "swiper/css";
import "swiper/css/autoplay";

import s from "./CardSlide.module.scss";

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
        spaceBetween={20}
        slidesPerView={8}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        loop={true} 
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id} className={s.swiperSlide}>
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
