import React, { useState, useEffect } from "react";
import { introduc } from "../Constents";
import { IntroductedStory } from "../Constents";


const Introducted = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (currentIndex < introduc.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);
  return (
    <div className="border absolute inset-0 flex justify-center items-center bg-black text-white">
      <div className="flex justify-center items-center ">
        {currentIndex < introduc.length ? (
          <p className="text-xl tracking-tighter bg-gray-600 px-2 absolute bottom-14">
            {introduc[currentIndex].dilog}
          </p>
        ) : (
         <IntroductedStory/>
        )}
      </div>
    </div>
  );
};

export default Introducted;
