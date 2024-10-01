"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface WindowSize {
  width: number | null;
  height: number | null;
}

const shainBio = `
  Born and raised in Ohio. My upbringing taught me a lot of what made me who I am today. 
  I believe in doing the right thing even when others aren’t looking. I have morals that I am proud of and I love helping others. 
  I served in the United States Army and did 1 tour in Afghanistan while my wife and kids waited for me to return home. 
  I take pride in knowing that I was able to serve my country and now I’m able to serve in a different way that I believe to be making a difference 
  with our Shoes For Soldiers nonprofit. As a married man and father, I know how to take care of people and I know it’s not always easy but always worth it. 
  I have lived in Arizona since 2015 and love all that it has to offer.
`;

const cynthiaBio = `
  I was born and raised in El Paso, Tx but, I always knew that I wouldn’t live there all my life. 
  After becoming a mom, I had ambitions and goals of finishing college and getting my Bachelor’s degree, but I wanted more. 
  So I decided to pursue my Master’s degree. I am passionate about helping my family and those around me succeed and grow. 
  I love what I do working at USAA full time while helping and supporting my husband. 
  I too have lived here in Phoenix with my family since 2015, and even though I never planned on living here, 
  I know it was the best decision we made because there are so many opportunities here for not only us but for our kids as well.
`;

const CallToAction = () => {
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
    <div className="flex flex-col items-center justify-center bg-[#c3c2bd] p-4 md:p-8 border-t border-b border-[#ab7552]">
      <h2 className="text-xl md:text-2xl font-army text-[#ab7552] font-bold mb-4 md:mb-6 hover:text-white text-center">
        Meet Davis Realty Team
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-32 w-full md:w-10/12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full md:max-w-[500px] items-center">
          <div className="">
            <Image
              alt="Cynthia"
              width={500}
              height={300}
              src="/images/shain-portrait.jpg"
              className="object-contain rounded-lg w-full"
            />
          </div>
          <div className="text-black w-full px-4 py-4 h-auto flex flex-col justify-center">
            <h2 className="text-md font-semibold mb-2 text-center">
              Shain Davis
            </h2>
            <p className="text-xs leading-relaxed text-left">{shainBio}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full md:max-w-[500px] items-center">
          <div className="">
            <Image
              alt="Cynthia"
              width={500}
              height={300}
              src="/images/shain-wife.jpg"
              className="object-contain rounded-lg w-full"
            />
          </div>
          <div className="text-black w-full px-4 py-4 h-auto flex flex-col justify-center">
            <h2 className="text-md font-semibold mb-2 text-center">
              Cynthia Davis
            </h2>
            <p className="text-xs leading-relaxed text-left">{cynthiaBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
