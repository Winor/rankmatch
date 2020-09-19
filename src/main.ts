import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import { auth } from "./firebase";

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueRouter)

import RankForm from "./components/RankForm.vue";
import login from "./components/login.vue";

const routes = [
  { path: '/', name: 'Login', component: login },
  { path: '/form', name: 'Form', component: RankForm, meta: { requiresAuth: true } }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged(() => {
    Vue.nextTick(() => {
      document.title = 'Rank Updater - ' + to.name || 'Rank Updater';
  });
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    if (auth.currentUser && to.name === 'Login') {
      next('/form')
    } else if (requiresAuth && !auth.currentUser) {
      next('/')
    } else {
      next()
    }
  })
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
