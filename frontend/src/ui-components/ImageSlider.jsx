import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider() {
  const images = [
    "https://upload.wikimedia.org/wikipedia/en/d/d7/Random_person_image.png",
    "https://www.shutterstock.com/image-illustration/random-pictures-cute-funny-260nw-2286554497.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0t0kuPlnMiF1k82bo3HMcNj4TiDaW3O-JQ&s",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-auto h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
