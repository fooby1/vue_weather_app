const heat = {
  temperature:50
};

const tempC = Math.floor((heat.temperature - 32) * 5 / 9) + "°";
const tempF = Math.floor(heat.temperature) + "°";

export default {
  getForecast
};


console.log(heat);
