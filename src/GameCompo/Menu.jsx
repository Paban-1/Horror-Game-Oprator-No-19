import React from "react";
import { MenuImg } from "../Constents";

const Menu = ({ onChangeScreen }) => {
  return (
    <div className="w-full h-full flex relative">
      <img
        src={MenuImg}
        alt=""
        className="h-full w-full fixed inset-0 -z-10 overflow-hidden"
      />

      <div className="w-1/2 flex flex-col justify-center items-center space-y-10 p-8 cursor-default">
        <div className="space-y-6">
          <h1 className="text-7xl flex flex-col -space-y-2">
            <span>Oporator</span>
            <span className="text-5xl">No. 
              19</span>
          </h1>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-2 justify-center items-center">
        <button
          onClick={() => onChangeScreen("Main")}
          className="font-spacel border px-12 py-2 rounded-xl hover:scale-105 duration-200 hover:rounded-2xl hover:bg-gray-300/20 hover:border-gray-300/20"
        >
          Start Game
        </button>
        <button
          onClick={() => onChangeScreen("HowToPlay")}
          className="font-spacel border px-12 py-2 rounded-xl hover:scale-105 duration-200 hover:rounded-2xl hover:bg-gray-300/20 hover:border-gray-300/20"
        >
          How To Play
        </button>
        <button
          onClick={() => onChangeScreen("Options")}
          className="font-spacel border px-12 py-2 rounded-xl hover:scale-105 duration-200 hover:rounded-2xl hover:bg-gray-300/20 hover:border-gray-300/20"
        >
          Options
        </button>
        <button
          onClick={() => onChangeScreen("Credits")}
          className="font-spacel border px-12 py-2 rounded-xl hover:scale-105 duration-200 hover:rounded-2xl hover:bg-gray-300/20 hover:border-gray-300/20"
        >
          Credits
        </button>
      </div>
    </div>
  );
};

export default Menu;
