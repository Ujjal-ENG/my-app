import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
const TemperatureInput = ({ temperature, scale, onTemperatureChange }) => {
  return (
    <>
      <fieldset>
        <legend>Enter Temperature in {scaleNames[scale]}
          <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e,scale)} />
        </legend>
      </fieldset>
    </>
  );
};

export default TemperatureInput;
