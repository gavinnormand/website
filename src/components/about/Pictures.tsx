import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { SpinnerCircularFixed } from "spinners-react";

interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

function Pictures() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/pictures/fetchPictures");
        if (!res.ok) throw new Error(`Failed to fetch images: ${res.status}`);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to fetch pictures:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return loading ? (
    <SpinnerCircularFixed
      size={50}
      thickness={100}
      speed={100}
      color="#5fad78"
      secondaryColor="rgba(0, 0, 0, 0.44)"
      className="mx-auto py-8"
    />
  ) : (
    <div className="relative mx-auto w-60 pt-4">
      <Swiper
        effect={"cards"}
        loop={true}
        allowTouchMove={false}
        modules={[EffectCards]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="aspect-3/4 w-60"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="overflow-hidden rounded-2xl">
            <img
              src={image.url}
              alt={image.id}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => {
          if (swiperRef.current && !swiperRef.current.animating) {
            swiperRef.current.slidePrev();
          }
        }}
        className="text-secondary-text absolute top-1/2 -left-16 -translate-y-1/2 cursor-pointer text-4xl"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => {
          if (swiperRef.current && !swiperRef.current.animating) {
            swiperRef.current.slideNext();
          }
        }}
        className="text-secondary-text absolute top-1/2 -right-16 -translate-y-1/2 cursor-pointer text-4xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Pictures;
