import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import slide1 from "../../public/assets/slide1.png";
import slide2 from "../../public/assets/slide1.png";
import slide3 from "../../public/assets/slide1.png";

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
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
