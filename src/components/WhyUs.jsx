import React, { useEffect, useState } from "react";
import whyUsSvg from "../assets/WhyUsSvgs/whyUsSvg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function WhyUsCard() {
  return (
    <div className="why__us__container__content__card">
      <img
        src={whyUsSvg}
        alt="whyUsSvg"
        className="why__us__container__content__card__img"
      />
      <div className="why__us__container__content__card__heading">
        User-Friendly
      </div>
      <div className="why__us__container__content__card__para">
        The platform is user-friendly offering guidance and tutorial for first
        time users.
      </div>
    </div>
  );
}

export default function WhyUs() {
  const [isWidth, setIsWidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setIsWidth(true);
    } else {
      setIsWidth(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 800) {
        setIsWidth(true);
      } else {
        setIsWidth(false);
      }
    });
  }, []);
  return (
    <div className="why__us__container">
      <div className="why__us__container__heading">Why LOREM IPSUM?</div>
      <div className="why__us__container__content__card__content">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={false}
          slidesPerView={isWidth ? 1.5 : 4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
          <SwiperSlide>
            <WhyUsCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
