<template>
  <div id="wrapper">

    <div id="topBar">
      <input id="searchBar" type="text" placeholder="Newcastle Upon Tyne, GB">
    </div>

    <div id="container">

      <div id="thePlace">
        <h1 id="theCity">Local Weather</h1>
        <p id="theTime">{{ forecast.currently.time | moment("HH:mm") }}</p>
      </div>

      <div id="theSummary">

        <div id="icon-canvas">
          {{ icons[forecast.currently.icon] }}
        </div>

        <div id="summaryText">

          <button id="temp">{{ Math.round(forecast.currently.temperature) }}°</button>

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
  name: 'Home',
  data() {
    return {
      forecast: {},
      icons: {
        'clear-day': '☀️',
        'clear-night': '🌒',
        rain: '🌧',
        snow: '🌨',
        sleet: '🍦',
        wind: '💨',
        fog: '🌫',
        cloudy: '⛅️',
        'partly-cloudy-day': 'PCD',
        'partly-cloudy-night': 'PCN'
      }
    };
  },
  mounted() {
    API.getForecast().then(result => {
      this.forecast = result;
    });
  },
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

#theSummary {
  padding: 10px 0px 10px 0px;
}

#container {
  background: #4e5d6b;
  margin: 10% 25% 10% 25%;
  color: #ebebeb;
  font-weight: 400;
}

#topBar {
  background-color: rgb(225, 225, 225);
  padding: 10px 5px 10px 5px;
}

#summary {
  font-weight: 700;
  font-size: 15px;
}

#summaryText {
  padding: 0px 15px 10px 0px;
}

#searchBar {
  background-color: rgb(245, 245, 245);
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 5px 5px 5px 5px;
  border-radius: 25px;
  color: rgb(27, 27, 27);
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 17px;
}

#searchBar:focus {
  outline: none;
  background-color: rgb(255, 255, 255);

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
