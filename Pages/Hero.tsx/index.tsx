"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-[#c3c2bd] overflow-y-hidden">
      <div className="hero-wrapper relative flex items-center justify-center h-screen">
        {/* Background Image */}
        <Image
          alt="army"
          src="/images/az-house.webp"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Hero Content */}
        <div className="absolute z-10 flex flex-col items-center justify-center h-full w-full space-y-6 px-4">
          {/* HomeBot Widget */}
          <div className="flex flex-col items-center space-y-4">
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
              <div
                id="homebot_homeowner"
                className="w-[500px] h-[100px] flex justify-center items-center transform scale-75"
              ></div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <style>
                    #homebot_homeowner {
                      transform-origin: center;
                    }
                    #homebot_homeowner h1, #homebot_homeowner_navbar h1 {
                      color: white !important;
                    }
                  </style>
                  <script>
                    (function (h, b) {
                      var w = window, d = document, s = 'script', x, y;
                      w['__hb_namespace'] = h;
                      w[h] = w[h] || function () {
                        (w[h].q = w[h].q || []).push(arguments)
                      };
                      y = d.createElement(s);
                      x = d.getElementsByTagName(s)[0];
                      y.async = 1;
                      y.src = b;
                      x.parentNode.insertBefore(y, x)
                    })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');
                    Homebot('#homebot_homeowner', 'e95177fcc094be0786dc2891ceafeab41e51026f78a7b97f');
                  </script>
                `,
              }}
            />
            <div className="flex items-center space-x-4 mt-20">
              <Image
                alt="usa"
                src="/images/realty-logo-white.png"
                width={windowSize.width < 768 ? 200 : 400}
                height={windowSize.width < 768 ? 45 : 400}
                className={windowSize.width < 768 ? "mb-2" : "mb-3"}
              />
            </div>
            <p className="font-primary text-white text-center text-[16px] md:text-[18px] max-w-[500px]">
              Guiding You Home with Heart and Expertise.
            </p>
            <a
              href="#CTA"
              className="hover:text-gray-300 transition duration-300"
            >
              <button className="text-[16px] md:text-[20px] tracking-wider px-12 py-6 border-2 border-[#ab7552] text-[#ab7552] font-bold font-army rounded hover:bg-[#ab7552] hover:text-white transition duration-300 shadow-lg hover:scale-105">
                About us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
