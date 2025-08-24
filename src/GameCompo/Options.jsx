import React from "react";

const Options = ({ onChangeScreen }) => {
  return (
    <div className="flex flex-col gap-2">
    Options
    <button onClick={() => onChangeScreen("Menu")}>Menu</button>
  </div>
  );
};

export default Options;
