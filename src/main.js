// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/index.styl'
import Mint from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Mint)
Vue.use(VueLazyLoad, {
  loading: 'common/image/default.png'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
  // template: '<App/>',
  // components: { App }
})
