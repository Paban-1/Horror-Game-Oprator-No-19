import React, { useState } from "react";
import Main from "../GameCompo/Main";
import Player from "../Player/Player";

const Screen = () => {
  return (
    <div className="fixed h-screen w-screen overflow-hidden inset-0 bg-blue-500">
      <Main />
      {/* <Player/> */}
    </div>
  );
};

export default Screen;
