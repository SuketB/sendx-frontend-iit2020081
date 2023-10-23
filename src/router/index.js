import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/type' },
    {
      path: '/type',
      name: 'type',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TypeView.vue'),
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/DesignView.vue'),
    },
    {
      path: '/content',
      redirect: '/content/landing-page.png'
    },
    {
      path: '/content/:img',
      name: 'content',
      component: () => import('../views/ContentView.vue'),
    },
    {
      path: '/targetting',
      name: 'targetting',
      component: () => import('../views/TargettingView.vue'),
    },
    {
      path: '/behaviour',
      name: 'behaviour',
      component: () => import('../views/BehaviourView.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessView.vue'),
    },
  ],
})

export default router
