import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
