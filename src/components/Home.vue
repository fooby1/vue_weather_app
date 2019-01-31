<template>
<div id="wrapper">

  <div id="topBar">
    <input v-model="location" id="searchBar" type="text" placeholder="Enter Location">
    <button @click="updateLocation" id="searchBtn" type="button">Search</button>
  </div>

  <div id="container" v-if="forecast">

    <div id="thePlace">
      <h1 id="theCity">{{ address.name }}</h1>
      <p id="theTime">{{ forecast.currently.time | moment("HH:mm") }}</p>
    </div>

    <div id="theSummary">

      <div id="icon-canvas">
        {{ icons[forecast.currently.icon] }}
      </div>

      <div id="summaryText">

        <button id="temp"> {{ Math.round(forecast.currently.temperature) }}°</button>
        <p id="summary">{{ forecast.minutely.summary }}</p><br />
        <p id="short-forecast">{{ forecast.daily.summary }}</p>

      </div>

    </div>

  </div>

</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
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
    this.loadWeather('38.7252', '-105.6077');
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
  color: #42b983;
}

#wrapper {
  width: 100%;
}

#thePlace {
  background-color: #485562;
  padding: 5px 10px 5px 10px;
}

#theTime {
  color: #ebab5b;
  padding-left: 5px;
  font-weight: 400;
  font-size: 16.9px;
}

#container {
  background: #4e5d6b;
  margin: 10% 25% 10% 25%;
  color: #ebebeb;
  font-weight: 400;
}

#theSummary {
  padding: 10px 0px 10px 0px;
}

#summary {
  font-weight: 700;
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
  font-weight: 700;
  font-size: 35px;
  color: #e1662c;
  padding-right: 5px;
  padding-bottom: 7px;
}

#icon-canvas {
  font-size: 50px;
  padding: 5px 20px 5px 20px;
  width: 50px;
  float: left;
}

#short-forecast {}
</style>
