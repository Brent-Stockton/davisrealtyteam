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
    <div style={{ padding: "20px" }}>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
    );
};

export default HomeContent;
