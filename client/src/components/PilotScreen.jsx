import React, { useEffect, useState } from "react";
import Text from "./Text";
import Visual from "./Visual";
import { io } from "socket.io-client";

const PilotScreen = () => {
  const socket = io("http://localhost:3001");
  const [text, setText] = useState(false);
  const [dataReceived, setDataReceived] = useState("");

  let dataObj = {
    ADI:Number( dataReceived.ADI),
    Altitude:Number( dataReceived.altitude),
    HIS:Number( dataReceived.HIS),
  };

  useEffect(() => {
    socket.on("send_data", (data) => {
      setDataReceived(data);
    });
    }, []);

  return (
    <div>
      <div className="w-[80%] mx-auto bg-slate-700 flex">
        <div className="w-[100px] p-3">
          <button
            onClick={() => {
              setText(false);
            }}
            className="border  rounded-md bg-slate-400 m-2 w-[60px] h-[40px]"
          >
            Visual
          </button>
          <button
            onClick={() => {
              setText(true);
            }}
            className=" bg-slate-400 w-[60px] h-[40px] border  rounded-md  m-2"
          >
            Text
          </button>
        </div>
        <div className="p-3">
          {text ? (
            <Text data={dataObj} />
          ) : (
            <Visual data={dataObj}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default PilotScreen;
