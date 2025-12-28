import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import { RiCloseLine } from "@remixicon/react";
import { spotlightItems } from "../../data/products";

function SpotLight() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <section className="w-full bg-white text-black pt-14 px-6 md:px-12 lg:px-30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mx-18 lg:mx-40 lg:mb-25">
          <h2 className="font-hegarty text-[40px] lg:text-7xl font-black tracking-tighter">
            SPOTLIGHT
          </h2>
          <p className="text-base max-w-2xl mx-auto">
            Classic silhouettes and cutting-edge innovation to build your game
            from the ground up.
          </p>
        </div>

        {/* Grid items*/}
        <div className="grid grid-cols-3 md:grid-cols-8 gap-y-15 md:gap-x-6 md:gap-y-12 mb-20">
          {spotlightItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center cursor-pointer ${
                index >= 6 ? "hidden md:flex" : ""
              }`}
            >
              <div className="mb-3 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[72px] h-[72px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-xs md:text-sm font-medium text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* See All button - mobile only */}
        {!isPanelOpen && (
          <div className="flex md:hidden justify-center mb-16">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="px-3 py-1 border border-gray-300 rounded-full text-base font-medium hover:border-gray-800 transition-colors flex items-center gap-2"
            >
              See All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Nike logo */}
        <div className="flex justify-center">
          <SiNike className="w-16 h-16 md:w-10 md:h-10 text-black" />
        </div>
      </div>

      {/* Slide-up panel - mobile only */}
      <div
        className={`fixed inset-0 z-50 bg-white md:hidden transition-transform duration-300 ease-out ${
          isPanelOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-end px-6 py-4">
          <button
            onClick={() => setIsPanelOpen(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close panel"
          >
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>

        {/* Panel content */}
        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          <div className="grid grid-cols-3 gap-8 p-6">
            {spotlightItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className="mb-3 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[72px] h-[72px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-medium text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop - mobile only */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsPanelOpen(false)}
        />
      )}
    </section>
  );
}

export default SpotLight;
