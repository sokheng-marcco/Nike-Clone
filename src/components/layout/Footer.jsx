import React, { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import privacyIcon from "../../assets/icons/privacy.png";
import {
  topLinks,
  categoryLinks,
  footerSections,
  legalLinks,
  location,
  copyright,
  guidesLinks,
} from "../../data/footer";

function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [showGuides, setShowGuides] = useState(false);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="w-full bg-white border-gray-200">
      <div className="px-6 lg:px-12 py-8">
        {/* Top links */}
        <div className="flex flex-wrap lg:justify-center gap-6 pt-9 pb-6 text-base font-medium">
          {topLinks.map((link, index) => (
            <button
              key={index}
              className="hover:text-black/60 transition-colors cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </div>

        {/* Category links */}
        <div className="md:hidden mb-5 mt-21 space-y-6">
          {Object.entries(categoryLinks).map(([key, category]) => (
            <h3 key={key} className="text-[20px] font-medium cursor-pointer">
              {category.title}
            </h3>
          ))}
        </div>

        {/* Desktop category - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-4 lg:justify-items-center gap-8 pb-14 px-6 mt-21 border-gray-200">
          {Object.entries(categoryLinks).map(([key, category]) => (
            <div key={key}>
              <h3 className="text-[20px] font-medium mb-4 cursor-pointer">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, index) => (
                  <li key={index}>
                    <button className="text-base text-gray-500 hover:text-black transition-colors cursor-pointer">
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dropdown sections on mobile only */}
        <div className="border-t border-gray-200 mt-12 lg:hidden">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="border-b border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between py-6 text-sm font-medium transition-colors cursor-pointer"
              >
                <span>{section.title}</span>
                <div className="transition-all duration-500 ease-in-out">
                  {openSections[key] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openSections[key]
                    ? "max-h-96 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3">
                  {section.links.map((link, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors py-1 cursor-pointer"
                    >
                      {link.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop footer sections grid */}
        <div className="hidden lg:grid lg:grid-cols-5 border-t border-gray-200 gap-8 py-12">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-medium mb-8">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <button className="text-sm text-gray-500 hover:text-black transition-colors cursor-pointer ">
                      {link.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Location in grid on desktop */}
          <div className="flex items-start gap-2 text-sm text-gray-500 cursor-pointer">
            <Globe className="w-4 h-4 mt-1" />
            <span>{location.country}</span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 border-gray-200 mb-20">
          {/* Location on mobile  */}
          <div className="flex items-center gap-2 text-sm pb-6 border-b border-gray-200 text-gray-500 mb-6 cursor-pointer lg:hidden">
            <Globe className="w-4 h-4" />
            <span>{location.country}</span>
          </div>

          {/* Copyright and legal links row */}
          <div className="lg:flex  lg:items-center lg:justify-between">
            <div className="lg:flex lg:items-center lg:gap-6 whitespace-nowrap">
              <p className="text-sm text-gray-500 mb-4 lg:mb-0">{copyright}</p>

              {/* Guides dropdown */}
              <div className="mb-4 lg:mb-0 relative">
                <button
                  onMouseEnter={() => setShowGuides(true)}
                  onMouseLeave={() => setShowGuides(false)}
                  className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors cursor-pointer"
                >
                  <span>Guides</span>
                  <div className="transition-all duration-500 ease-in-out">
                    {showGuides ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Guides panel */}
                {showGuides && (
                  <div
                    onMouseEnter={() => setShowGuides(true)}
                    onMouseLeave={() => setShowGuides(false)}
                    className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[200px] z-10"
                  >
                    <div className="space-y-2">
                      {guidesLinks.map((link, index) => (
                        <button
                          key={index}
                          className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors py-1 cursor-pointer"
                        >
                          {link.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right side */}

              <div className="space-y-4 lg:space-y-0 lg:flex lg:gap-6 text-sm text-black/60">
                {legalLinks.map((link, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer"
                  >
                    {link.hasIcon && (
                      <img
                        src={privacyIcon}
                        alt="Privacy"
                        className="w-4 h-4"
                      />
                    )}
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
