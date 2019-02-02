<template>
<div id="weatherWrapper">

  <div id="header">

    <h1>Weather App</h1>

  </div>

  <div id="topBar">
    <input v-model="location" id="searchBar" type="text" placeholder="Enter Location">
    <button @click="updateLocation" id="searchBtn" type="button">Search</button>
  </div>

  <div id="alerts">

    <a href="http://meteoalarm.eu/en_UK/0/0/UK013.html">{{ forecast.alerts[0].title }}</a>

  </div>

  <div id="container" v-if="forecast">

    <div id="thePlace">
      <h1 id="theCity">{{ address.name }}</h1>
      <p id="theTime">{{ forecast.currently.time | moment("HH:mm") }}</p>
    </div>

    <div id="theSummary">

    <!--  <div id="icon-canvas">
        {{ icons[forecast.currently.icon] }}
      </div> -->

      <div id="summaryText">

        <button id="temp"> {{ Math.round(forecast.currently.temperature) }}°</button>
        <p id="summary">{{ forecast.hourly.summary }}</p><br />
        <p id="short-forecast">{{ forecast.daily.summary }}</p>

      </div>

    </div>

  </div>

  <div id="map" ref="map">
    <iframe
      id="map-embed-iframe"
      frameborder="0"
      height="450px"
      width="100%"
      :src='embedURL'>
    </iframe>
  </div>

  <div id="footer">

    <p>Powered by DarkSky</p>

  </div>

</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      embedURL: '',
      location: '',
      address: '',
      forecast: null,
      icons: {
        'clear-day': '☀️',
        'clear-night': '🌒',
        rain: '🌧',
        snow: '🌨',
        sleet: '🍦',
        wind: '💨',
        fog: '🌫',
        cloudy: '⛅️',
        'partly-cloudy-day': '⛅️',
        'partly-cloudy-night': '⛅️'
      }
    };
  },
  mounted() {
    this.loadWeather('51.5073', '-0.1276');
  },
  props: {
    // Icon size
    width: {
      type: Number,
      default: 64
    },

    height: {
      type: Number,
      default: 64
    },

    // Weather condition
    condition: {
      type: String,
      default: null
    }
  },
  methods: {
    loadWeather(lat, lng) {

      this.embedURL = API.getEmbedURL(lat, lng)

      API.getAddress(lat, lng).then(result => {
        this.address = result;
      });
      API.getForecast(lat, lng).then(result => {
        this.forecast = result;
      });
    },
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
        this.loadWeather(result.latitude, result.longitude);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: rgb(231, 63, 63);
  font-size: 20px;
  font-weight: 650;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#weatherWrapper {
  width: 100%;
}

#header {
  background-color: rgb(51, 51, 51);
  text-align: center;
  padding: 10px 5px 10px 5px;
}

#alerts {
  color: rgb(231, 63, 63);
  text-align: center;
  padding: 40px 5px 20px 5px;
}

#thePlace {
  background-color: rgb(252, 252, 252);
  padding: 5px 10px 5px 10px;
}

#theTime {
  color: rgb(208, 143, 60);
  padding-left: 5px;
  font-weight: 400;
  font-size: 16.9px;
}

#container {
  background: rgb(252, 252, 252);
  margin: 1% 15% 5% 15%;
  color: rgb(66, 66, 66);
  font-weight: 400;
  text-align: center;
}

#theSummary {
  padding: 10px 0px 10px 0px;
}

#summary {
  font-weight: 530;
  font-size: 15px;
}

#summaryText {
  padding: 0px 15px 10px 0px;
}

#topBar {
  background-color: rgb(225, 225, 225);
  padding: 10px 5px 10px 5px;
  text-align: center;
}

#searchBar {
  background-color: rgb(245, 245, 245);
  width: 40%;
  padding: 5px 5px 5px 5px;
  margin: 0 auto;
  border-radius: 25px;
  color: rgb(27, 27, 27);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 17px;
}

#searchBar:focus {
  outline: none;
  background-color: rgb(255, 255, 255);

}

#searchBtn {
  background-color: rgb(235, 235, 235);
  width: 70px;
  display: inline-block;
  margin-left: -70px;
  padding: 5px 5px 5px 5px;
  border-radius: 25px;
  color: rgb(27, 27, 27);
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 17px;
}

input:focus::-webkit-input-placeholder {
  opacity: 0;
}

#temp {
  color: #e1662c;
  padding-right: 5px;
  padding-bottom: 7px;
  font-weight: 700;
  font-size: 15px;
}

#icon-canvas {
  font-size: 50px;
  padding: 5px 20px 5px 20px;
  width: 50px;
}

#short-forecast {}

#map {
  margin: 0px;
}

#footer {
  background-color: rgb(51, 51, 51);
  text-align: center;
  margin: 0px;
  padding: 20px 5px 20px 5px;
  bottom: 0;
  width: 100%;
}
</style>
