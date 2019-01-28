<template>
  <div id="thePlace">
    <h1 id="theCity">{{ msg }}</h1>
    <p id="theTime">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String,
    time: String
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
}
#theTime {
  color: #ebab5b;
  padding-left: 5px;
  font-weight: 400;
  font-size: 16.9px;
}
</style>
