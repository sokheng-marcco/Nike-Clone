import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';
import privacyIcon from '../../assets/icons/privacy.png';
import { 
  topLinks, 
  categoryLinks, 
  footerSections, 
  legalLinks, 
  location, 
  copyright,
  guidesLinks  
} from '../../data/footer';

function Footer() {
  const [openSections, setOpenSections] = useState({});
  const [showGuides, setShowGuides] = useState(false); 

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

return (
  <footer className="w-full bg-white border-gray-200">
    <div className="px-6 md:px-12 py-8">
      {/* Top Links */}
      <div className="flex flex-wrap gap-6 pt-9 pb-6 text-base font-medium">
        {topLinks.map((link, index) => (
          <button
            key={index}
            className="hover:text-black/60 transition-colors cursor-pointer"
          >
            {link.title}
          </button>
        ))}
      </div>

      {/* Category Links - Mobile only */}
      <div className="md:hidden mb-5 mt-21 space-y-6">
        {categoryLinks.map((category, index) => (
          <h3 key={index} className="text-[20px] font-medium cursor-pointer">
            {category.title}
          </h3>
        ))}
      </div>

      {/* Dropdown Sections */}
      <div className="border-t border-gray-200 mt-12">
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

      {/* Bottom Section */}
      <div className="mt-6 border-gray-200 mb-20">
        {/* Location */}
        <div className="flex items-center gap-2 text-sm pb-6 border-b border-gray-200 text-gray-500 mb-6 cursor-pointer">
          <Globe className="w-4 h-4" />
          <span>{location.country}</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 mb-4">{copyright}</p>

        {/* Guides Dropdown */}
        <div className="mb-4 relative">
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

          {/* Guides Panel */}
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

        
        {/* Legal Links */}
        <div className="space-y-4 text-sm text-black/60">
          {legalLinks.map((link, index) => (
            <button
              key={index}
              className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer"
            >
              {link.hasIcon && (
                <img src={privacyIcon} alt="Privacy" className="w-4 h-4" />
              )}
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
}

export default Footer;