import React, { useState } from "react";
import {
  RiCloseLine,
  RiMenuLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "@remixicon/react";
import { SiNike, SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import {
  menuItems,
  searchItems,
  topNavbarLink,
  megaMenuItems,
} from "../../data/navigation";
import { IoHeartOutline } from "react-icons/io5";

const MegaNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveSubmenu(null);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const openSubmenu = (item) => {
    setActiveSubmenu(item);
  };

  const closeSubmenu = () => {
    setActiveSubmenu(null);
  };
  return (
    <div>
      {/* Top navbar */}
      <nav className="hidden lg:block">
        <section className="flex items-center justify-between bg-neutral-100 px-12 h-8">
          {/* Left icons */}
          <div className="flex gap-6">
            <SiJordan className="w-5 h-5 cursor-pointer " />
            <GiConverseShoe className="w-5 h-5 cursor-pointer " />
          </div>

          {/* Right links */}
          <div>
            <ul className="flex text-xs font-medium leading-3 gap-4">
              {topNavbarLink.map((link, index) => (
                <li
                  key={index}
                  className={`border-[#111111] pr-4 ${
                    index === topNavbarLink.length - 1 ? "" : "border-r"
                  }`}
                >
                  <button className="hover:text-[#707072] cursor-pointer transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>

      {/* Main Menu */}
      <nav className="hidden lg:block sticky top-0 z-50 bg-white">
        <section className="relative flex items-center justify-between px-12 h-15">
          {/* Logo left nav */}
          <div className="shrink-0">
            <SiNike className="h-14 w-auto cursor-pointer " />
          </div>

          {/* Menu contents middle nav */}
          <div className="flex-1 flex justify-center min-w-0 ">
            <ul className="flex gap-3 text-base font-medium">
              {megaMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="px-2 py-1  transition-colors">
                    {item.label}
                  </button>

                  {/* Underline */}
                  {activeMenu === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right icons */}
          <div className="flex items-center">
            {/* Search section */}
            <section
              className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 h-[70%] ${
                isSearchOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Search Header */}
              <div className="flex items-center justify-between mx-6 transform transition-all duration-500">
                {/* Logo  */}
                <div className="">
                  <SiNike className="w-20 h-20" />
                </div>

                {/* Search bar */}
                <div
                  className={`flex-1 flex items-center justify-center bg-gray-100 rounded-full transform transition-all duration-400 mx-18 p-1  ${
                    isSearchOpen
                      ? "translate-x-0 opacity-100 delay-200"
                      : "translate-x-8 opacity-0"
                  }`}
                >
                  <svg
                    className="w-8 h-auto text-gray-800 rounded-full p-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 text-base outline-none bg-transparent pl-1"
                    autoFocus
                  />
                </div>

                {/* Cancel btn */}
                <button
                  type="button"
                  onClick={toggleSearch}
                  className={`px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-300 ${
                    isSearchOpen
                      ? "scale-100 opacity-100 delay-300"
                      : "scale-75 opacity-0"
                  }`}
                  aria-label="Cancel"
                >
                  Cancel
                </button>
              </div>

              {/* Search Content */}
              <div
                className={`px-45 pt-9 pb-15 transform transition-all duration-500 ${
                  isSearchOpen
                    ? "translate-x-0 opacity-100 delay-300"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-sm font-light text-zinc-500 tracking-wide mb-4">
                    Popular Search Terms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {searchItems.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-base font-medium text-gray-900 transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Search icon */}
            <button
              type="button"
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-200 transition-colors cursor-pointer "
              aria-label="Search"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Interest icon */}
            <button>
              <IoHeartOutline className="w-10 h-10 m-1 p-2 rounded-full hover:bg-gray-200 active:bg-gray-200 transition-colors cursor-pointer" />
            </button>

            {/* Shop card */}
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Shopping bag"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {activeMenu !== null && (
            <div
              className="absolute top-full left-0 right-0 bg-white shadow-lg animate-slideDown"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="px-30 py-8">
                <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto">
                  {megaMenuItems[activeMenu].submenu.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="font-medium text-base mb-4 text-black">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <a
                              href={subItem.href}
                              className="text-gray-500 hover:text-black transition-colors text-sm block"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </nav>
    </div>
  );
};

export default MegaNavbar;
