import { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine, RiArrowRightSLine } from "@remixicon/react";

import NikeLogo from "../../assets/icons/nike-logo.png";
import SearchIcon from "../../assets/icons/search.png";
import UserIcon from "../../assets/icons/user.png";
import ShopBagIcon from "../../assets/icons/shopping-bag.png";
import { navigationData } from "../../data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const mainNav = navigationData.mainNav;

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* Top bar: logo left, icons right */}
      <div className="flex items-center justify-between px-4">
        {/* Logo */}
        <div className="shrink-0">
          <Link to="/">
            <img
              src={NikeLogo}
              alt="Nike logo"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right icons - search, user, bag, menu */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Search"
          >
            <img
              src={SearchIcon}
              alt="Search"
              className="h-5 w-5 object-contain"
            />
          </button>

          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Account"
          >
            <img
              src={UserIcon}
              alt="User"
              className="h-5 w-5 object-contain"
            />
          </button>

          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label="Shopping bag"
          >
            <img
              src={ShopBagIcon}
              alt="Shopping bag"
              className="h-5 w-5 object-contain"
            />
          </button>

          {/* Menu toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenuLine className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          {/* Menu header: logo left, close right */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src={NikeLogo}
                alt="Nike logo"
                className="h-6 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-1 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <RiCloseLine className="w-6 h-6" />
            </button>
          </div>

          {/* Main navigation items */}
          <nav className="flex flex-col justify-between h-[calc(100vh-56px)]">
            <ul className="px-4 py-4 space-y-1">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 border-b border-gray-100 text-base font-semibold tracking-tight text-gray-900"
                  >
                    <span>{item.label}</span>
                    <RiArrowRightSLine className="w-5 h-5 text-gray-500" />
                  </button>
                </li>
              ))}

              {/* Extra items to match requested list */}
              {!mainNav.find((i) => i.label === "NikeSKIMS") && (
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 border-b border-gray-100 text-base font-semibold tracking-tight text-gray-900"
                  >
                    <span>NikeSKIMS</span>
                    <RiArrowRightSLine className="w-5 h-5 text-gray-500" />
                  </button>
                </li>
              )}

              {!mainNav.find((i) => i.label === "Sport") && (
                <li>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 border-b border-gray-100 text-base font-semibold tracking-tight text-gray-900"
                  >
                    <span>Sport</span>
                    <RiArrowRightSLine className="w-5 h-5 text-gray-500" />
                  </button>
                </li>
              )}
            </ul>

            {/* Bottom brand section */}
            <div className="border-t border-gray-200 px-4 py-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-900" />
                  <span className="text-base font-semibold tracking-tight">
                    Jordan
                  </span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-500" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full border border-gray-900" />
                  <span className="text-base font-semibold tracking-tight">
                    Converse
                  </span>
                </div>
                <RiArrowRightSLine className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
