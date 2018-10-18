import Vue from 'vue'
import App from './App.vue'
import zyPcUi from 'zy-pc-ui'
Vue.use(zyPcUi)
new Vue({
  el: '#app',
  render: h => h(App)
})
