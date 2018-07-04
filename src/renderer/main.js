import Vue from 'vue';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import router from './router';
import store from './store';

import db from './datastore';

library.add(faCoffee);
library.add(faPlusSquare);
Vue.component('font-awesome-icon', FontAwesomeIcon);

if (!process.env.IS_WEB) Vue.use(require('vue-electron') );
Vue.http = Vue.prototype.$http = axios;
Vue.db = Vue.prototype.$db = db;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
