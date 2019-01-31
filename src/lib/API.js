const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '32787c73f1b51e1e390f713136119916';
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`;
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`;
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1`

function getCoordinates(location) {
  return fetch(`${GEO_API_URL}${location}`)
    .then(response => response.json());
}

function getForecast(lat, lng) {
  return fetch(`${WEATHER_API_URL}${lat},${lng}`)
    .then(response => response.json());
}

function getAddress(lat, lng) {
  return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
    .then(response => response.json());
}

//darksky.net/rgeo?hires=1 &lat= 38.7252 &lon= -105.6077

export default {
  getForecast,
  getCoordinates,
  getAddress,
};
