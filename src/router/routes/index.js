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
    path: '/error',
    name: 'error',
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '*',
    redirect: '/error'
  },
]