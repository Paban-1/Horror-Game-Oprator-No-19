import React, { useState, useEffect } from "react";
import { AppWindowIcon, AppWindowMacIcon, FolderIcon } from "lucide-react";
import GuideBox from "../Guide/GuideBox";
import Play from "./Play";

const GamePlay = () => {
  const [windowOpen, setWindowOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [UserExist, setUserExist] = useState(true);
  const [guide, setGuide] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [play, setPlay] = useState(false);

  const toggleOpen = () => {
    setWindowOpen(true);
  };

  const handleMatchUser = () => {
    if (userName === "user" && password === "123") {
      setUserExist(true);
      setWindowOpen(false);
      setGuide(false);
      setIsLogin(true);
      setUserName("");
      setPassword("");
    } else {
      setUserExist(false);
    }
  };

  useEffect(() => {
    if (windowOpen) {
      const timer = setInterval(() => {
        setGuide(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [windowOpen]);

  return (
    <div className="h-full w-full absolute inset-0 flex bg-green-400 flex flex-col">
      <div className="h-full w-full">
        <button
          className={`${
            isLogin ? "hidden" : "block"
          } p-2 flex flex-col justify-center items-center font-spacel`}
          onClick={toggleOpen}
        >
          <FolderIcon className="h-10 w-10" />
          Sing Job In
        </button>

        <div
          className={`${
            windowOpen ? "block" : "hidden"
          } w-full h-full flex justify-center items-center bg-black absolute inset-0`}
        >
          <div className="border rounded-md flex flex-col justify-center items-center gap-2 p-2 font-spacel">
            <p>User Login</p>
            <input
              type="text"
              className="bg-transparent border outline-none px-2 py-1 rounded"
              placeholder="UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              className="bg-transparent border rounded outline-none px-2 py-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="border px-4 py-1 rounded hover:scale-105 duration-200"
              onClick={handleMatchUser}
            >
              Log to system
            </button>

            <p>
              {UserExist ? "" : <p className="text-red-600">*Wrong Login</p>}
            </p>
          </div>
        </div>
        {guide && <GuideBox />}
      </div>

      <div
        className={`${
          isLogin ? "hidden" : "block"
        } p-1 flex justify-start items-center gap-2 bg-gray-700`}
      >
        <div>
          <AppWindowMacIcon className="w-10 h-10" />
        </div>
        <div className="border px-16 py-4 bg-white rounded"></div>
      </div>
      <div className={`${isLogin ? "block":"hidden"} w-full h-full absolute inset-0 p-2`}>
        {isLogin && <Play />}
      </div>
    </div>
  );
};

export default GamePlay;
