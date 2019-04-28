import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

//The below will map which routes to which component
const routes = [
  { path: '/data/:type', component: Data }
  //with the aboeve, the word following data in the URL will be captured in the variable type
]

//create an actual VueRouter instance for Vue to use and pass the routes array
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') //targets the div with id = app
