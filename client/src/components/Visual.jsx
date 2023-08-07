import React, { useEffect, useState } from "react";
import { CgArrowUp } from "react-icons/cg";
import { Socket } from "socket.io-client";

const Visual = (props) => {
  const [greenUp, setGreenUp] = useState(false);
  const [greenDown, setGreenDown] = useState(false);
  const [blueDown, setBlueDown] = useState(false);
  const [blueUp, setBlueUp] = useState(false);
  const { Altitude, HIS, ADI } = props.data;
  let adi = Number(ADI);

 useEffect(() => {
  
    if (adi === -100) {
      setGreenUp(true);
      setGreenDown(true);
      setBlueUp(false);
      setBlueDown(false);
    } else if (adi === 100) {
      setBlueDown(true);
      setBlueUp(true);
      setGreenDown(false);
      setGreenUp(false);
    } else if (adi === 0) {
      setBlueUp(true);
      setBlueDown(false);
      setGreenDown(true);
      setGreenUp(false);
    }else if (adi !== 100 && adi && -100 && adi !== 0) {
      setBlueUp(false);
      setBlueDown(false);
      setGreenDown(false);
      setGreenUp(false);
    }
  }, [Socket,adi]);
  let alt = Altitude / 10;
  if (alt === 300) {
    alt = 290;
  }
  return (
    <div className="text-white flex justify-between items-center  w-[600px]">
      {/* <--- Altitude  --> */}

      <div className="m-5 text-lg text-center relative  font-medium w-[50px] h-[300px] border-[3px] bg-slate-400 text-black  ">
        <div className="h-[30%]">3000</div>
        {Altitude > 3000 &&  <p>enter number between 0 to 3000</p>}

        <div className="h-[30%]">2000</div>
        <div className="h-[30%]">1000</div>

        <div className="">0</div>

        <div
          className={`w-[50px]  bottom-[${alt}px]  border-black border-[4px] absolute `}
        ></div>
      </div>

      {/* <--- HIS / rotate --->*/}

      <div className=" relative w-[0px] h-[200px]">
        <CgArrowUp
          color="black"
          className="text-8xl z-10  absolute top-[25%] left-[90px]"
        />
      </div>

      <div
        style={{ rotate: `${HIS - 360}deg` }}
        className="rotate- border-4 relative  text-black font-bold justify-center items-center pb-7 text-lg  bg-slate-400 rounded-full w-[200px] h-[200px]"
      >
        {HIS > 360 && <p>enter numbers between 0 to 360</p>}

        <div className="h-[50%]   items-start justify-center flex">0</div>
        <div className="flex justify-between  ">
          <div className="pl-1">270</div>
          <div className="pr-1">180</div>
        </div>

        <div className="h-[50%] items-end  justify-center flex">
          <p>90</p>
        </div>
      </div>
      {/* <---  ADI  ---> */}

      <div
        className={`text-black text-center  border-4 rounded-full w-[200px] h-[200px]`}
      >
        <div
          className={`relative rounded-t-full ${blueUp && "bg-blue-500"}  ${
            greenUp && "bg-green-500"
          } h-[50%]`}
        >
          {" "}
          {!blueUp && !greenUp && (
            <p className="text-white z-5 absolute top-9  left-6">
              enter only this option <br /> 100, -100, 0
            </p>
          )}
        </div>
        <div
          dir="rtl"
          className={` ${blueUp && "bg-blue-500"}  ${
            greenDown && "bg-green-500"
          } rounded-b-full h-[50%]`}
        ></div>
      </div>
    </div>
  );
};

export default Visual;
