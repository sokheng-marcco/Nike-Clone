import { useState, useRef, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import heroSlides from "../../data/hero";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play();
    }
  }, [currentSlide]);

  const handleVideoEnd = () => {
    if (!isPaused) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Pause and reset other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const togglePause = () => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPaused) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];

    const updateProgress = () => {
      if (currentVideo) {
        const progress =
          (currentVideo.currentTime / currentVideo.duration) * 100;
        setVideoProgress(progress);
      }
    };

    if (currentVideo) {
      currentVideo.addEventListener("timeupdate", updateProgress);
      currentVideo.play();
    }

    return () => {
      if (currentVideo) {
        currentVideo.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [currentSlide]);

  const goToPrevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const circumference = 2 * Math.PI * 45; // 2πr where r=45%
  const strokeDashoffset =
    circumference - (videoProgress / 100) * circumference;

  return (
    <section className="relative w-full h-[637px] bg-gray-900 overflow-hidden">
      {/* Video Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="w-full h-full object-cover"
            muted
            playsInline
            onEnded={handleVideoEnd}
          >
            <source src={slide.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-center">
            <h1 className="font-hegarty font-black text-4xl italic md:text-6xl lg:text-7xl text-white mb-3 tracking-tighter ">
              {slide.title}
            </h1>
            <p className="text-base md:text-lg text-white mb-6 max-w-md mx-auto">
              {slide.description}
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      <div className="absolute right-6 bottom-6 z-30 flex items-center gap-3">
        {/* Pause/Play button */}
        <button
          onClick={togglePause}
          className="bg-white/10 backdrop-blur-sm rounded-full border-white/30 transition-colors w-6 h-6 md:w-9 md:h-9 relative cursor-pointer"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {/* Circular progress */}
          <svg
            className="absolute inset-0 -rotate-90 w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: isPaused ? "none" : "stroke-dashoffset 0.3s linear",
              }}
            />
          </svg>

          {isPaused ? (
            <svg
              className="w-4 h-4 text-white relative z-10 m-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-white/80 hover:text-white relative z-10 m-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevSlide}
          className="hidden md:flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-colors w-9 h-9 cursor-pointer"
          aria-label="Previous slide"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>

        <button
          onClick={goToNextSlide}
          className="hidden md:flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/80 transition-colors w-9 h-9 cursor-pointer"
          aria-label="Next slide"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 w-[5px] h-[5px] ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
