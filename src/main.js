// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import VueResource from 'vue-resource'
import VueClipboards from 'vue-clipboards'

import 'vue-material/dist/vue-material.css'

var VueMaterial = require('vue-material')

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(VueClipboards)
Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-green',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
