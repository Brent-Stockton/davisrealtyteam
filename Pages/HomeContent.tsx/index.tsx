"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface WindowSize {
  width: number | null;
  height: number | null;
}
const HomeContent = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
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
       <section>

      <h1>Your Trusted Residential & Commercial Properties Realtor in Phoenix, AZ</h1>
<p>When it comes to buying or selling property in one of the fastest-growing real estate markets in the country, having the right guidance makes all the difference. As a dedicated Residential & Commercial Properties Realtor n Phoenix, AZ, my mission is to make your real estate journey smooth, informed, and successful—whether you’re stepping into the market for the first time, moving up to your dream home, investing, or preparing to sell. Phoenix and the surrounding Valley offer incredible opportunities, and I’m here to help you make the most of them.</p>
     </section>
      
    );
};

export default HomeContent;
