import React from "react";
import { MenuImg } from "../Constents";


const GuideBox = () => {
  return (
    <div className="font-spacel rounded absolute bottom-14 right-2 px-2 py-2 bg-white text-black ">
      <div className="flex gap-4">
        <img
          src={MenuImg}
          alt=""
          height={12}
          width={30}
          className="rounded-full"
        />
        <p>Hi, I'm Lima your gide</p>
      </div>
      <div>
        <p>Please login to the system</p>
        <p>UserName : user</p>
        <p>Password : 123</p>
      </div>
    </div>
  );
};

export default GuideBox;
