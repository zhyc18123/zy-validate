import Vue from 'vue'
import App from './App.vue'
import zyPcUi from './lib/index.js'
Vue.use(zyPcUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
