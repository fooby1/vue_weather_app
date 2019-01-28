<template>
<div id="container">

  <div id="thePlace">
    <h1 id="theCity">Local Forecast</h1>
    <p id="theTime">{{ forecast.currently.time }}</p>
  </div>

  <div id="theSummary">

    <canvas id="icon-canvas" width="75" height="75">
      {{ forecast.currently.icon }}
    </canvas>

    <button id="temp">{{ forecast.currently.temperature }}°</button>

    <p id="summary">{{ forecast.currently.summary }}</p><br />

    <p id="short-forecast">{{ forecast.daily.data[6] }}</p>
  </div>

</div>
</template>

<script>
import API from '@/lib/API';

export default {
  name: 'Home',
  data() {
    return {
      forecast: {}
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
  padding: 5px 10px 5px 10px;
}

#container {
  background: #4e5d6b;
  margin: 0 auto;
  color: #ebebeb;
  font-weight: 400;
}

#summary {
  font-weight: 700;
  font-size: 15px;
}

#temp {
  font-weight: 700;
  font-size: 35px;
  color: #e1662c;
  padding-right: 5px;
}
</style>
