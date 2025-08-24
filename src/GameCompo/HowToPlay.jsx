import React, { useState } from "react";
import { MenuImg, queryss } from "../Constents";

const HowToPlay = ({ onChangeScreen }) => {
  return (
    <div className="h-full w-full flex gap-2 p-4 font-spacel bg-black/50 relative overflow-y-scroll">
      <img src={MenuImg} alt="" className="h-full w-full fixed inset-0 -z-10" />

      <div className="border w-1/2 ">
          {queryss.map((query)=>(
            <p key={query.id}>{query.play}</p>
          ))}
      </div>
      <div className="border w-1/2">
        <button onClick={() => onChangeScreen("Menu")}>Menu</button>
      </div>
    </div>
  );
};

export default HowToPlay;
