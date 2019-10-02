import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard';
import Write from './views/Write';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Write
    },
  ]
})