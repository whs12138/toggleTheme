import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Add.vue'),

  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
