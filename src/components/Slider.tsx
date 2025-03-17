import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import slide1 from "../../public/assets/slide1.png";
import slide2 from "../../public/assets/slide2.png";
import slide3 from "../../public/assets/slide3.png";

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500 }}
        speed={1300}
        loop={true}
        rewind={true}
        grabCursor={true}
        className="mySwiper rounded-2xl"
      >
        <SwiperSlide>
          <LazyLoadImage
            src={slide1}
            alt="Slide 1"
            effect="blur"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            src={slide2}
            alt="Slide 1"
            effect="blur"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            src={slide3}
            alt="Slide 1"
            effect="blur"
            className="w-full h-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
