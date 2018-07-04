import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: require('@/components/Container').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

