import React, { useState } from "react";
import Play from "./Play";

const LoginPage = () => {
  const [code, setCode] = useState("");
  const [pass, setPass] = useState("");
  const [isPlayActive, setIsPlayActive] = useState(false);
  const [elseMassege, setElseMassege] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "code" && pass === "123") {
      setIsPlayActive(true);
      setElseMassege("");
    } else {
      setElseMassege("*Invalid login");
    }
  };

  return (
    <section className="bg-black text-black rounded-md h-screen w-full select-none">
      <div
        className={`h-full w-full p-2 flex justify-center items-center flex-col`}
      >
        <form
          onSubmit={handleSubmit}
          className={`${
            isPlayActive ? "hidden" : "block"
          } flex flex-col gap-2 justify-center`}
        >
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-80 px-2 py-3 rounded outline-none"
            placeholder="Enter Oprater Code"
          />
          <input
            type="text"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-80 px-2 py-3 rounded outline-none"
            placeholder="Enter Oprater Pass"
          />
          <button
            type="submit"
            className="border border-gray-400 rounded text-2xl bg-gray-500 text-white hover:text-black hover:bg-gray-300 duration-200"
          >
            Login
          </button>
          <div className="mt-4 text-red-600 font-spacel">
            <p>{elseMassege}</p>
          </div>
        </form>
        {isPlayActive && <Play />}
      </div>
    </section>
  );
};

export default LoginPage;
