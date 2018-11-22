import Vue from 'vue'
import App from './App.vue'
import zyPcUi from './lib/index'
console.log(zyPcUi)
Vue.use(zyPcUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
