const proxy = 'https://cors-anywhere.herokuapp.com/';
const API_KEY = '32787c73f1b51e1e390f713136119916'
const location = '37.8267,-122.4233'
const API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${location}`;

function getForecast() {
  return fetch(API_URL)
    .then(response => response.json());
};

export default {
  getForecast
};
