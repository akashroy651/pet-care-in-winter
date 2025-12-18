
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from '../../assets/twoDog.jpg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpg'


const Slider = () => {
  return (
    <div className="w-full  mx-auto">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <img
            src={img1}
            loading="lazy"
            alt="slide 1"
            className="rounded-lg w-full h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            loading="lazy"
            alt="slide 2"
            className="rounded-lg w-full h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
              src={img3}
            loading="lazy"
            alt="slide 3"
            className="rounded-lg w-full h-[450px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
