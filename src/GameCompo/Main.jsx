import React, { useEffect, useState } from "react";
import { StoryData } from "../Constents/index.js";
import GamePlay from "../GamePlay/GamePlay.jsx";


const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < StoryData.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-center bg-red-500 h-screen w-full">
      {currentIndex < StoryData.length ? (
        <p>{StoryData[currentIndex].data}</p>
      ) : (
        <div className="h-screen w-full bg-black">
          <GamePlay />
        </div>
      )}
    </div>
  );
};

export default Main;
