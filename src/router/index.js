import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/gallery.vue')
    },
    {
      path: '/wiki/:path',
      name: 'wiki',
      component: () => import('../views/wiki.vue'),
      props: true
    },
  ]
})

export default router
