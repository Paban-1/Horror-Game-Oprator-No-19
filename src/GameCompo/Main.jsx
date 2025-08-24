import React, { useState, useEffect, useRef } from "react";
import { StoryData } from "../Constents";
import GamePlay from "./GamePlay";

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStart, setGameStart] = useState(false);

  useEffect(() => {
    const currentItems = StoryData[currentIndex];

    if (currentIndex < StoryData.length) {
      const audio = new Audio(currentItems.audio);
      audio.play();

      const handleIndex = () => {
        setCurrentIndex((prev) => prev + 1);
      };

      audio.addEventListener("ended", handleIndex);

      return () => {
        audio.removeEventListener("ended", handleIndex);
      };
    } else {
      setGameStart(true);
    }
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-center h-full w-full relative">
      {currentIndex < StoryData.length && (
        <p> {StoryData[currentIndex].data}</p>
      )}

      {gameStart && <GamePlay />}
    </div>
  );
};

export default Main;
