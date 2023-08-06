import React from "react";

const Text = (props) => {
  
  return (
    <div className="text-white text-2xl h-[300px]  m-5">
      <div>
        <h1>Altitude : {props.data.Altitude <= 3000 ? props.data.Altitude : "enter numbers between 0 to 3000 "}</h1>
      </div>
      <div>
        <h1>HIS : {props.data.HIS}</h1>
      </div>
      <div>
        <h1>ADI : {props.data.ADI > 100  ? "enter only 100, -100 ,0":props.data.ADI}</h1>
      </div>
      <div>
        <h1>Press any key</h1>
      </div>
      <div>
        <h1> - Sending Data </h1>
      </div>
    </div>
  );
};

export default Text;
