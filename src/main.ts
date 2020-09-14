import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { auth } from "./firebase";

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Vuex)
Vue.use(VueRouter)

import RankForm from "./components/RankForm.vue";
import login from "./components/login.vue";

const routes = [
  { path: '/', name: 'login', component: login },
  { path: '/form', name: 'form', component: RankForm, meta: { requiresAuth: true } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged(() => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    if (auth.currentUser && to.name === 'login') {
      next('/form')
    } else if (requiresAuth && !auth.currentUser) {
      next('/')
    } else {
      next()
    }
  })
})

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
