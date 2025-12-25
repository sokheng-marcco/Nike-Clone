import { useState } from "react";
import { RiCloseLine, RiMenuLine, RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";
import { SiNike, SiJordan } from "react-icons/si";
import { GiConverseShoe } from "react-icons/gi";
import {menuItems, searchItems} from "../../data/navigation"


function Navbar() {
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
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar: logo left, icons right */}
      <nav className="flex lg:hidden items-center justify-between sticky top-0 z-50 px-6 h-15 bg-white">
        {/* Logo */}
        <div className="shrink-0">
          <SiNike className="h-14 w-auto" />
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSearch}
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Search"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Account"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>

          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Shopping bag"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          {/* Menu toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <RiMenuLine className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Search section */}
      <section
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ${
          isSearchOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Search Header */}
        <div className="flex items-center justify-between mx-6 my-3 transform transition-all duration-500">

          {/* Search bar */}
          <div className={`flex-1 flex items-center justify-center bg-gray-200 rounded-full transform transition-all duration-400 ${
            isSearchOpen ? "translate-x-0 opacity-100 delay-200" : "translate-x-8 opacity-0"
          }`}>
            <svg className="w-8 h-auto text-gray-800 bg-gray-100 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
              isSearchOpen ? "scale-100 opacity-100 delay-300" : "scale-75 opacity-0"
            }`}
            aria-label="Cancel"
          >
            Cancel
          </button>
        </div>

        {/* Search Content */}
        <div className={`px-6 py-6 transform transition-all duration-500 ${
          isSearchOpen ? "translate-x-0 opacity-100 delay-300" : "translate-x-8 opacity-0"
        }`}>
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

      {/* Mobile side menu*/}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu container with sliding panels */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Main Menu Panel */}
          <section
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
              activeSubmenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Menu header: close button */}
            <div className="flex items-center justify-end px-6 py-4">
              <button
                type="button"
                onClick={toggleMenu}
                className="rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>

            {/* Main navigation items */}
            <nav className="flex flex-col h-[calc(100vh-72px)] overflow-y-auto">
              <ul className="pl-9 pr-6 py-6 text-[#111111] hover:text-[#707072]/80 cursor-pointer">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => openSubmenu(item)}
                      className="flex w-full items-center justify-between py-2 text-2xl font-normal text-[#111111] hover:text-[#707072]/80 cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <RiArrowRightSLine className="w-6 h-5" />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Bottom section */}
              <div className="py-6 space-y-6">
                {/* Brand links */}
                <div className="px-[30px] space-y-4">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 text-left transition-opacity cursor-pointer"
                  >
                    <SiJordan className="w-8 h-8" />
                    <span className="font-medium">Jordan</span>
                  </button>

                  <button
                    type="button"
                    className="flex w-full items-center gap-3 text-left transition-opacity cursor-pointer"
                  >
                    <GiConverseShoe className="w-8 h-8" />
                    <span className="font-medium">Converse</span>
                  </button>
                </div>

                {/* Membership section */}
                <div className="px-9 py-12 border-gray-200">
                  <p className="text-[20px] text-neutral-500 mb-3">
                    Become a Nike Member for the best products, inspiration and stories in sport.{" "}
                    <span className="font-semibold text-neutral-950 cursor-pointer">Learn more</span>
                  </p>
                  <div className="flex gap-2">
                    <button className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                      Join Us
                    </button>
                    <button className="px-5 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-gray-400 transition-colors cursor-pointer">
                      Sign In
                    </button>
                  </div>
                </div>

                {/* Bottom links */}
                <div className="px-[30px] space-y-3">
                  <button className="flex items-center gap-3 text-[#111111] hover:text-gray-900 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Help</span>
                  </button>

                  <button className="flex items-center gap-3 text-[#111111] hover:text-gray-900 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="font-medium">Bag</span>
                  </button>

                  <button className="flex items-center gap-3 text-[#111111] hover:text-gray-900 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="font-medium">Orders</span>
                  </button>

                  <button className="flex items-center gap-3 text-[#111111] hover:text-gray-900 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Find a Store</span>
                  </button>
                </div>
              </div>
            </nav>
          </section>

          {/* Submenu Panel */}
          <section
            className={`absolute inset-0 bg-white transition-transform duration-300 ease-in-out ${
              activeSubmenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Submenu header: back button and title */}
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={closeSubmenu}
                  className="p-1 hover:opacity-70 transition-opacity"
                  aria-label="Go back"
                >
                  <RiArrowLeftSLine className="w-6 h-6" />
                </button>
                <span className="text-base font-medium">All</span>
              </div>
              <button
                type="button"
                onClick={toggleMenu}
                className="p-1 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>

            {/* Submenu content */}
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              {/* Category title */}
              <div className="px-6 py-6">
                <h2 className="text-2xl font-medium text-[#111111]">{activeSubmenu?.label}</h2>
              </div>

              {/* Submenu items */}
              <div className="px-6">
                <ul>
                  {activeSubmenu?.submenu.map((subitem, index) => (
                    <li key={subitem.label}>
                      <a
                        href={subitem.href}
                        className="flex items-center justify-between py-3 text-base text-[#707072] hover:text-gray-900 transition-colors"
                      >
                        <span>{subitem.label}</span>
                        {subitem.hasSubmenu && (
                          <RiArrowRightSLine className="w-5 h-5 text-gray-400" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}

export default Navbar;