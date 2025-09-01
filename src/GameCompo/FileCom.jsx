import React from "react";
import { FileIcon } from "lucide-react";
import LoginPage from "./LoginPage";

const FileCom = ({startplay}) => {
  return (
    <div className="px-4 py-6 rounded">
      <button onClick={startplay}>
        <FileIcon />
      </button>
    </div>
  );
};

export default FileCom;
