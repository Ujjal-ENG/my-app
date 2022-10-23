import React, { Component } from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/Converter";
import BoilingVersict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  hangleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const Celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const Fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <>
        <TemperatureInput
          scale="c"
          temperature={Celsius}
          onTemperatureChange={this.hangleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={Fahrenheit}
          onTemperatureChange={this.hangleChange}
        />
        <BoilingVersict celcius={parseFloat(temperature)} />
      </>
    );
  }
}
