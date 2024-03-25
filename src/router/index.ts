import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Unv APP',
      component: () => import('../views/StartView.vue')
    },
    {
      path: '/home',
      name: '一些奇怪小玩具',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

router.beforeEach((to) => {
  document.title = to.name?.toString() ?? 'Unv APP'
})

export default router
