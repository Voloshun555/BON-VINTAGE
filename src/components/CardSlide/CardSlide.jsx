import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
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
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={8}
        loop={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
      >
        {data?.map((product) => (
          <SwiperSlide key={product.id} >
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
