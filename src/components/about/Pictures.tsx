import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { useState } from "react";

function Pictures() {
  const pictures = [
    { src: "/about/pictures/Boston1.avif", location: "Boston, MA" },
    { src: "/about/pictures/Boston2.avif", location: "Boston, MA" },
    { src: "/about/pictures/Brooklyn.avif", location: "Brooklyn, NY" },
    { src: "/about/pictures/Cambridge1.avif", location: "Cambridge, MA" },
    { src: "/about/pictures/Cambridge2.avif", location: "Cambridge, MA" },
    { src: "/about/pictures/ChristianScience1.avif", location: "Boston, MA" },
    { src: "/about/pictures/ChristianScience2.avif", location: "Boston, MA" },
    { src: "/about/pictures/ChristianScience3.avif", location: "Boston, MA" },
    { src: "/about/pictures/Citgo.avif", location: "Boston, MA" },
    { src: "/about/pictures/Esplanade.avif", location: "Boston, MA" },
    { src: "/about/pictures/Fenway.avif", location: "Boston, MA" },
    { src: "/about/pictures/GWBridge.avif", location: "New York, NY" },
    { src: "/about/pictures/Hoboken1.avif", location: "Hoboken, NJ" },
    { src: "/about/pictures/Hoboken2.avif", location: "Hoboken, NJ" },
    { src: "/about/pictures/JonesBeach.avif", location: "Jones Beach, NY" },
    { src: "/about/pictures/Killington.avif", location: "Killington, VT" },
    { src: "/about/pictures/LakeGeorge.avif", location: "Lake George, NY" },
    { src: "/about/pictures/LongBranch.avif", location: "Long Branch, NJ" },
    { src: "/about/pictures/Melrose1.avif", location: "Melrose, MA" },
    { src: "/about/pictures/Melrose2.avif", location: "Melrose, MA" },
    { src: "/about/pictures/MFA1.avif", location: "Boston, MA" },
    { src: "/about/pictures/MFA2.avif", location: "Boston, MA" },
    { src: "/about/pictures/Seattle1.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Snowport.avif", location: "Boston, MA" },
    { src: "/about/pictures/TDGarden.avif", location: "Boston, MA" },
    { src: "/about/pictures/Seattle2.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle3.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle4.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle5.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle6.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle7.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle8.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle9.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle10.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle11.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle12.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle13.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle14.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle15.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle16.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Seattle17.avif", location: "Seattle, WA" },
    { src: "/about/pictures/Brooklyn2.avif", location: "Brooklyn, NY" },
    { src: "/about/pictures/Brooklyn3.avif", location: "Brooklyn, NY" },
    { src: "/about/pictures/LakeGeorge2.avif", location: "Lake George, NY" },
    { src: "/about/pictures/LakeGeorge3.avif", location: "Lake George, NY" },
  ];

  const [currentPicture, setCurrentPicture] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: false,
    slides: {
      perView: 1.4,
      spacing: 16,
      origin: "center",
    },
    slideChanged(slider) {
      setCurrentPicture(slider.track.details.rel);
    },
  });

  return (
    <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
      <div className="flex w-full flex-row gap-2 pt-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="text-secondary-text cursor-pointer text-2xl"
        >
          <FaChevronLeft />
        </button>

        <div ref={sliderRef} className="keen-slider rounded-sm">
          {pictures.map((picture) => (
            <div className="keen-slider__slide aspect-square overflow-hidden rounded-2xl">
              <img src={picture.src} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.next()}
          className="text-secondary-text cursor-pointer text-2xl"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="text-secondary-text flex flex-row items-center gap-2 text-xl">
        <FaMapPin />
        <p>{pictures[currentPicture].location}</p>
      </div>
    </div>
  );
}

export default Pictures;
