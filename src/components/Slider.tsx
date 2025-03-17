import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import slide1 from "../../public/assets/slide1.png";
import slide2 from "../../public/assets/slide2.png";
import slide3 from "../../public/assets/slide3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Slider() {
  const slides = [slide1, slide2, slide3];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500 }}
        speed={1000}
        rewind={true}
        grabCursor={true}
        className="mySwiper rounded-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <LazyLoadImage
              src={slide}
              alt={`slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
