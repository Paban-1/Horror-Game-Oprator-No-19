import React from "react";

const InterFace = ({ onStart }) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <button
        className="text-2xl border p-2 rounded-md"
        onClick={onStart}
      >
        Play
      </button>
    </div>
  );
};

export default InterFace;
