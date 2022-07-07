export default [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/login/regist.vue')
  },
  {
    path: '/regist-original',
    name: 'registOriginal',
    meta: { requiresAuth: true },
    component: () => import('@/views/regist-original/index.vue')
  },
  {
    path: '/',
    redirect: '/index',
  }
]