import React from "react";

const Text = (props) => {
  const { Altitude, HIS, ADI } = props.data;

  return (
    <div className="text-white text-2xl h-[300px]  m-5">
      <div>
        <h1>Altitude : { Altitude }</h1>
      </div>
      <div>
        <h1>HIS : {HIS}</h1>
      </div>
      <div>
        <h1>ADI : {ADI > 100  ? "enter only 100, -100 ,0" : ADI}</h1>
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
