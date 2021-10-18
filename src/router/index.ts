import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const Contact = () => import('../pages/Contact.vue');
const NotFound = () => import('../pages/NotFound.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'not-found',
      },
    },
  ],
});
