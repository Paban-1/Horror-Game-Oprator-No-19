import React from "react";
import { MenuImg } from "../Constents";
import { NavLink } from "react-router-dom";

const MenuPage = () => {
  return (
    <section className="absolute inset-0">
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center">
        <h2 className="text-white text-8xl tracking-tighter font-extralight">
          Oprator 911
        </h2>
        <div className="flex justify-center items-center">
          <NavLink to="/introducted"
           className={`text-white text-5xl bg-blue-600 py-2 px-6 rounded-full`}>
            Play
          </NavLink>
        </div>
      </div>
      <div className="w-full h-full z-20">
        <img src={MenuImg} alt="" className="h-full w-full" />
      </div>
    </section>
  );
};

export default MenuPage;
