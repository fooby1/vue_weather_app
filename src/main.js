import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation';
import VueSkycons from 'vue-skycons'

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(VueGeolocation);
Vue.use(VueSkycons);

new Vue({
  render: h => h(App),
}).$mount('#app')
