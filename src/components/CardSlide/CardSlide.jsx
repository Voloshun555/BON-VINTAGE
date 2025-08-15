import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useProducts } from "@/hooks/useProducts";
import { Spiner } from "../Spiner/Spiner";

import "swiper/css";
import "swiper/css/autoplay";

import shared from "@/scss/base/shared.module.scss";
import s from "./CardSlide.module.scss"; 
import "@/scss/base/_cardSlide.scss";
import { useState } from "react";

export const CardSlide = () => {
  const { data, isLoading, isError } = useProducts(25);
  const [loadedImages, setLoadedImages] = useState({}); // зберігаємо, які фото вже завантажені

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  if (isLoading) {
    return (
      <div className={shared.center}>
        <Spiner />
      </div>
    );
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
            slidesPerView: 5,
            spaceBetween: 20,
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
            <div className={s.slideWrapper}>
              {!loadedImages[product.id] && (
                <div className={shared.center}>
                  <Spiner />
                </div>
              )}
              <img
                className={s.slideImage}
                loading="lazy"
                src={product.mainImage}
                alt={product.title}
                onLoad={() => handleImageLoad(product.id)}
                style={{
                  display: loadedImages[product.id] ? "block" : "none"
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
