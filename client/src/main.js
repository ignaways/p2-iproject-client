import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueAnimate from 'vue-animate-scroll'
 
Vue.use(VueAnimate)

Vue.config.productionTip = false

Vue.use(VueLazyload)
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents:['scroll','mousewheel'],
})
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
