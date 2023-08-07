import React, { useEffect, useState } from "react";
import Text from "./Text";
import Visual from "./Visual";
import { io } from "socket.io-client";

const PilotScreen = () => {
  const socket = io("http://localhost:3001");
  const [isTextMode, setIsTextMode] = useState(false);
  const [dataReceived, setDataReceived] = useState({
    ADI: 0,
    Altitude: 0,
    HIS: 0,
  });
  useEffect(() => {
    socket.on("send_data", (data) => {
      setDataReceived(data);
    });
  }, [socket]);

  return (
    <div>
      <div className="w-[80%] mx-auto bg-slate-700 flex">
        <div className="w-[100px] p-3">
          <button
            onClick={() => {
              setIsTextMode(false);
            }}
            className={`border rounded-md bg-slate-400 m-2 w-[60px] h-[40px] ${
              !isTextMode && "bg-blue-500 text-white"
            }`}
          >
            Visual
          </button>
          <button
            onClick={() => {
              setIsTextMode(true);
            }}
            className={`bg-slate-400 w-[60px] h-[40px] border rounded-md m-2 ${
              isTextMode && "bg-blue-500 text-white"
            }`}
          >
            Text
          </button>
        </div>
        <div className="p-3">
          {isTextMode ? <Text data={dataReceived} /> : <Visual data={dataReceived} />}
        </div>
      </div>
    </div>
  );
};

export default PilotScreen;
