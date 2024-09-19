"use client";
import Image from "next/image";
import { useState } from "react";

1;
const StickyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-[#c3c2bd] shadow-md z-50-[#ab7552] z-50">
      <div className="px-4 sm:px-6 lg:px-8 border-[#ab7552] border-y">
        <div className="flex justify-between items-center py-3 md:py-4 ">
          <div className="flex-shrink-0 ">
            <Image
              src="/images/realty-logo.png"
              alt="Logo"
              width={75}
              height={50}
              className="w-24 h-12 md:w-24 md:h-16"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 "
            >
              {isMenuOpen ? (
                <Image
                  src="/images/close.png"
                  alt="Close Icon"
                  width={26}
                  height={26}
                />
              ) : (
                <Image
                  src="/images/hamburger.png"
                  alt="Hamburger Icon"
                  width={26}
                  height={26}
                />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col md:flex-row md:flex space-x-0 md:space-x-9 text-[#ab7552] font-army text-[25px] md:text-[25px] absolute md:relative top-16 md:top-0 left-0 w-full md:bg-transparent p-6 md:p-0 md:items-center md:w-auto bg-[#c3c2bd]`}
          >
            <a
              href="#hero"
              className="block py-2 md:py-0 md:inline hover:text-white transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 md:py-0 md:inline hover:text-white  transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="block py-2 md:py-0 md:inline hover:text-white  transition duration-300 hover:scale-105 md:hover:scale-110"
            >
              Gallery
            </a>
            <div className="md:p-2 md:border-[#ab7552] md:border hover:bg-[#ab7552]">
              <a
                href="#contact"
                className="block py-2 md:py-0 md:inline hover:text-white  transition duration-300 hover:scale-105 md:hover:scale-110"
              >
                Sell with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
