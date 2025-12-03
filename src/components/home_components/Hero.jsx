import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/heroSlider.json")
      .then((res) => res.json())
      .then((data) => setSlides(data.slides))
      .catch((err) => console.error("Error loading slides:", err));
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[75vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient from-black/40 to-black/60"></div>
            <div className="relative text-center text-white z-10 px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeInUp">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 drop-shadow-md animate-fadeInUp delay-200">
                {slide.subtitle}
              </p>
              <button onClick={() => navigate('/services')} className="btn bg-white text-gray-900 hover:bg-blue-400 border-none font-semibold rounded-full px-6 py-2 animate-fadeInUp delay-400">
                Explore Winter Care
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
