import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IntroductedStoryDilogs } from "../Constents";

const IntroductedStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    if (currentIndex < IntroductedStoryDilogs.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);
  return (
    <div className="flex justify-center items-center select-none">
      {currentIndex < IntroductedStoryDilogs.length ? (
        <p className="w-1/2 duration-300">{IntroductedStoryDilogs[currentIndex].dilog}</p>
      ) : (
        navigate('/play')
      )}
    </div>
  );
};

export default IntroductedStory;
