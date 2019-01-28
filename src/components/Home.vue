<template>
  <div id="thePlace">
    <h1 id="theCity">Newcastle Upon Tyne</h1>
    <p id="theTime">14:40</p>
    <pre>{{ forecast }}</pre>
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
      console.log(result);
      this.forecast = result;
    });
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
</style>
