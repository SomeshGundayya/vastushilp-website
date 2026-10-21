
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/about-building.jpg",
    alt: "Modern residential architectural design",
  },
  {
    src: "/images/about-building-2.jpg",
    alt: "Contemporary building elevation",
  },
  {
    src: "/images/about-building-3.jpg",
    alt: "Residential construction project",
  },
  {
    src: "/images/about-building-4.jpg",
    alt: "Architectural and structural design",
  },
];

function AboutImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="group relative h-[400px] overflow-hidden rounded-lg bg-slate-100 sm:h-[520px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Architectural project image gallery"
      aria-roledescription="carousel"
    >
      {/* Images with Fade Transition */}
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0"
          }`}
          aria-hidden={index !== currentIndex}
        />
      ))}

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Previous Button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#111827] shadow-md transition hover:bg-white"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#111827] shadow-md transition hover:bg-white"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-7 bg-[#D4A017]"
                : "w-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute right-4 top-4 rounded-md bg-[#111827]/75 px-3 py-1.5 text-xs font-semibold text-white">
        {String(currentIndex + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}

export default AboutImageSlider;
