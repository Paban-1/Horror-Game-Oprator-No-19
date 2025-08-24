import React, { useState } from "react";
import Main from "../GameCompo/Main";
import Menu from "../GameCompo/Menu";
import HowToPlay from "../GameCompo/HowToPlay";
import Options from "../GameCompo/Options";
import Credits from "../GameCompo/Credits";

const Screen = () => {
  const [screen, setScreen] = useState("Menu");

  return (
    <div className="fixed h-screen w-screen overflow-hidden inset-0">
      {screen === "Menu" && <Menu onChangeScreen={setScreen} />}
      {screen === "Main" && <Main />}
      {screen === "HowToPlay" && <HowToPlay onChangeScreen={setScreen} />}
      {screen === "Options" && <Options onChangeScreen={setScreen} />}
      {screen === "Credits" && <Credits onChangeScreen={setScreen} />}
    </div>
  );
};

export default Screen;
