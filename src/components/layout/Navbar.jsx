import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationData } from "../../data/navigation";
import NikeLogo from "../../assets/icons/NikeLogo";
import SearchIcon from "../../assets/icons/SearchIcon";
import CartIcon from "../../assets/icons/CartIcon";

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      {/* Top Navigation */}
      <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="w-full px-4">
          <div className="flex justify-end items-center h-9 text-sm">
            {navigationData.topNav.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="px-4 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <NikeLogo className="w-16 h-6 text-black" />
          </Link>

          {/* Main Menu */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navigationData.mainNav.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredMenu(index)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.href}
                  className="px-4 py-2 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && hoveredMenu === index && (
                  <div className="absolute top-full left-0 bg-white shadow-lg py-4 min-w-[200px] z-50">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block px-6 py-2 text-sm hover:bg-gray-50 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <SearchIcon />
            </button>

            {/* Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

