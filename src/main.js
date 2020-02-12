import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';

Vue.config.productionTip = false;

import dotenv from 'dotenv';
dotenv.config();

import Home from './pages/Home.vue';

Vue.use(Router);
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

router.beforeEach(function(to, from, next) {
  //debugger;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
