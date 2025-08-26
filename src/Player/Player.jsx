import React, { useEffect, useState } from "react";

const Player = () => {
  //player default position
  const [position, setPosition] = useState({ x: 100, y: 100 });

  //player speed
  const speed = 10;

  //handle key press
  const handleKeyDown = (e) => {
    setPosition((prev) => {
      let { x, y } = prev;

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          y -= speed;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          y += speed;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          x -= speed;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          x += speed;
          break;
        default:
          break;
      }
      return { x, y };
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // <div className="absolute inset-0 border">
      <div
        className="border rounded-xl h-14 w-8 bg-red-400 absolute"
        style={{ left: position.x, top: position.y, transition: "0.1s linear" }}
      ></div>
    // </div>
  );
};

export default Player;
