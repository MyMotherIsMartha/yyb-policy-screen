import { createRouter, createWebHistory } from "vue-router";
import Index from './views/index.vue';
import Mobile from './views/Mobile/index.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/pc',
      name: 'PC',
      component: Index,
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: Mobile,
    }
  ],
});