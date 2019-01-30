const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '32787c73f1b51e1e390f713136119916'
const location = '55.026430299999994,-1.5174124999999998'
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast() {
  return fetch(WEATHER_API_URL)
    .then(response => response.json());
}

export default {
  getForecast,
  getCoordinates
};
