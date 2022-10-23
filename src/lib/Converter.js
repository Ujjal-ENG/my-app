export function toCelsius(Fahrenheit) {
  return ((Fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(Celsius) {
  return Celsius * (9 / 5) + 32;
}

export function convert(temperature, converto) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  } else {
    const output = converto(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
}
