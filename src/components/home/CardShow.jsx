import React from "react";
import { cards } from "../../data/products";

function CardShow() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full aspect-3/4 lg:aspect-auto lg:min-h-[500px] overflow-hidden group"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Top-right text */}
            <div className="absolute top-4 right-4">
              <p className="text-xs font-medium text-white [writing-mode:vertical-rl]">
                {card.author}
              </p>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 text-white">
              <p className="text-base font-medium mb-2">{card.category}</p>
              <h3 className="text-2xl font-medium mb-6 leading-tight max-w-md">
                {card.title}
              </h3>
              <button className="bg-white text-black px-4 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardShow;
