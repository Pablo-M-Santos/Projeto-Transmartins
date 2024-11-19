import { createRouter, createWebHistory } from 'vue-router/auto'
import PaginaInicial from '@/pages/PaginaInicial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaginaInicial,
    },
  ]
})


router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
