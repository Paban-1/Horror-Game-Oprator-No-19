import React from "react";
import Player from "../Player/Player";
import Coin from "./Coin";

const Main = () => {
  return (
    <section className="h-screen w-full border overflow-hidden flex flex-col justify-between bg-gray-500 select-none relative overflow-hidden">
      <Coin />
      <Player />

      <div className="flex justify-between">
        <div className="border p-8 h-40 w-40 bg-green-500">House 1</div>
        <div className="border p-8 h-60 w-40">House 2</div>
        <div className="border p-8 h-40 w-80">House 3</div>
        <div className="border p-8 h-60 w-40"> house 4</div>
      </div>

      <div className="flex justify-between">
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-80"></div>
      </div>

      <div className="flex justify-between">
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-40"></div>
        <div className="border p-8 h-40 w-40"></div>
      </div>
    </section>
  );
};

export default Main;
