import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import AOS from 'aos'
import 'aos/dist/aos.css'

import ItemCard from './components/ItemCard'
Vue.component('ItemCard', ItemCard)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
