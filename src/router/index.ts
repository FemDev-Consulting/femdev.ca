import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const Workshop = () => import('../pages/Workshop.vue');
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
      path: '/workshop',
      name: 'workshop',
      component: Workshop,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});
