import React from "react";
import { FirstDay } from "../Constents";

const GamePlay = () => {
  return (
    <section className="border border-black h-screen w-full overflow-hidden bg-gray-600">
      <div className="border h-full w-full flex flex-col justify-center items-center">
        <div className="border p-2 h-1/2 w-full">{/* DILOGS  */}</div>
        <div className="border p-2 h-1/2 w-full flex">
          {/* OPTIONS  */}
          {FirstDay.map((items) => (
            <div key={items.id} className="flex">
              <p className="cursor-pointer">{items.opraDilog}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamePlay;
