// import React from "react";
// import img from "../../assets/pet.jpeg";

// const Home = () => {
//   return (
//     <div>
//       <h1>hi this home</h1>
//       {/* // "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)", */}
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage: `url(${img})`,
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;







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
            // src="https://picsum.photos/800/400?1"
            src={img1}
            loading="lazy"
            alt="slide 1"
            className="rounded-lg w-full h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            // src="https://picsum.photos/800/400?2"
            src={img2}
            loading="lazy"
            alt="slide 2"
            className="rounded-lg w-full h-[450px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            // src="https://picsum.photos/800/400?3"
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
