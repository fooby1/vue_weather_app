<template>
<body>
  <div id="app">
    <Home />
  </div>
</body>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
  }
}
</script>

<style>
#app {
  background: rgb(252, 252, 252);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: rgb(66, 66, 66);
  padding: 0px;
  margin: 0px;
}

body {
  color: rgb(66, 66, 66);
  padding: 0px;
  margin: 0px;
}

h1 {
  font-weight: 680;
  font-size: 18px;
}

h2 {
  font-weight: 400;
}

h3 {
  font-weight: 400;
}

h1,
p,
h2,
h3 {
  display: inline;
}

p {
  font-size: 15px;
  font-weight: 300;
}

input,
button,
submit {
  border: none;
  background: none;
  margin: 0px;
  padding: 0px;
}

button:focus {
  outline-style: none;
}
</style>
