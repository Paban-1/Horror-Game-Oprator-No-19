import React, { useState } from "react";
import FileCom from "../GameCompo/FileCom.jsx";
import LoginPage from "../GameCompo/LoginPage.jsx";

const GamePlay = ({ startplay }) => {
  const [showPlay, setShowPlay] = useState(false);
  return (
    <div
      className="bg-blue-500 h-screen w-full flex justify-center items-center"
      
    >
        {showPlay ? (<LoginPage/>):(<FileCom startplay={()=> setShowPlay(true)}/>)}
    </div>
  );
};

export default GamePlay;
