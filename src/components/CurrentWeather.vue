<template>
<div id="currentWeather">
  <h1 id="temp">8° </h1>
  <p id="condition">Clear for the hour.</p><br />
  <p id="shortForecast">Foggy tomorrow afternoon.</p><br />
</div>
</template>

<script>
export default {
  name: 'CurrentWeather',
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

#currentWeather {
  background: #4e5d6b;
}

#temp {
  font-weight: 700;
  font-size: 35px;
  color: #e1662c;
}

#condition {
  font-weight: 700;
  font-size: 15px;
}
</style>
