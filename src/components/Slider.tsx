import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={1300}
        loop={false}
        rewind={true}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <img src="/assets/slide1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide3.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
