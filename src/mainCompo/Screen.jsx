import React, { useState } from "react";
import InterFace from "../GameCompo/InterFace";
import Main from "../GameCompo/Main";

const Screen = () => {
  const [ShowCompo, setShowCompo] = useState(false);

  return (
    <div className="fixed h-screen w-screen overflow-hidden inset-0">
      {ShowCompo ? <Main /> : <InterFace onStart={() => setShowCompo(true)} />}
    </div>
  );
};
export default Screen;
