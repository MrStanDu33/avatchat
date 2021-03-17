import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  template: '<router-view/>',
}).$mount('#app');
