import React, { useState, useRef } from "react";
import { productCard } from "../../data/products";

function SlideshowCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;

    if (isAtEnd) {
      if (currentIndex !== productCard.length - 1) {
        setCurrentIndex(productCard.length - 1);
      }
      return;
    }

    const cardElements = Array.from(container.children || []);
    if (cardElements.length === 0) return;

    let maxVisibility = 0;
    let mostVisibleIndex = 0;

    cardElements.forEach((card, index) => {
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const cardRight = cardLeft + cardWidth;

      const visibleLeft = Math.max(scrollLeft, cardLeft);
      const visibleRight = Math.min(scrollLeft + clientWidth, cardRight);
      const visibleWidth = Math.max(0, visibleRight - visibleLeft);
      const visibilityRatio = visibleWidth / cardWidth;

      if (visibilityRatio > maxVisibility) {
        maxVisibility = visibilityRatio;
        mostVisibleIndex = index;
      }
    });

    if (mostVisibleIndex !== currentIndex) {
      setCurrentIndex(mostVisibleIndex);
    }
  };

  return (
    <section className="w-full bg-white pb-12 pt-18 pl-6 lg:pl-12 flex ">
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="overflow-x-auto pb-4 snap-x snap-mandatory h-auto"
        // style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <ul className="flex gap-3">
          {productCard.map((card, index) => (
            <li
              key={index}
              className={`snap-start shrink-0 w-[70vw] md:w-[540px] lg:w-[300px] xl:w-[400px] 2xl:w-[450px] list-none`}
            >
              <div className="relative w-full aspect-3/4 overflow-hidden cursor-pointer group">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Author text on top right vertical */}
                <div className="absolute top-6 right-4">
                  <p className="text-xs font-normal text-white [writing-mode:vertical-rl]">
                    {card.author}
                  </p>
                </div>

                {/* Title - Bottom left (visible on md+) */}
                <div className="hidden md:block absolute bottom-6 left-6 lg:bottom-12 lg:left-10">
                  <button className="bg-white text-black px-4 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
                    {card.title}
                  </button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Title below card (visible on mobile only) */}
              <div className="md:hidden">
                <h3 className="text-lg font-normal pt-4 text-black">
                  {card.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SlideshowCards;
