<template>
<body>
  <div id="app">
    <Home/>
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
  background: #2b3e4f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 10% 25% 10% 25%;
  color: #ebebeb;
}

body {
  background: #2b3e4f;
  font-family: 'Lato';
  color: #ebebeb;
}

h1 {
  font-weight: 700;
  font-size: 26px;
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

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
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
