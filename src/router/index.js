import { createRouter, createWebHistory } from 'vue-router/auto'
import HomePage from '@/pages/HomePage.vue'
import FrotaDeCaminhoes from '@/pages/FrotaDeCaminhoes.vue'
import CaminhaoDetalhes from '@/pages/CaminhaoDetalhes.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/frota',
      name: 'frota',
      component: FrotaDeCaminhoes,
    },
    {
      path: '/caminhao/:id',
      name: 'CaminhaoDetalhes',
      component: CaminhaoDetalhes,
      props: true,
    },
  ];

  const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router
