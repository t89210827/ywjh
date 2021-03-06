import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

import fly from './utils/request'
Vue.prototype.$fly = fly

const app = new Vue(App)
app.$mount()
