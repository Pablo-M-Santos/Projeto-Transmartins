import { createRouter, createWebHistory } from 'vue-router/auto'
import HomePage from '@/pages/HomePage.vue'
import FrotaDeCaminhoes from '@/pages/FrotaDeCaminhoes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
})


router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
