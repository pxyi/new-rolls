import RouterView from './router-view.vue';
/* ------ 0: 乐迷   1: 音乐人   2: 博客   3: 自媒体   4: 厂牌 ------*/
const oneOrfourRoutes = [
  {
    path: 'upload',
    meta: { title: '作品上传', icon: 'home' },
    component: RouterView,
    redirect: '/upload/single',
    children: [
      {
        path: 'single',
        meta: { title: '上传单曲' },
        component: () => import('@/views/test.vue')
      },
      {
        path: 'album',
        meta: { title: '上传专辑' },
        component: () => import('@/views/test.vue')
      },
      {
        path: 'demo',
        meta: { title: '上传Demo' },
        component: () => import('@/views/test.vue')
      },
    ]
  },
  {
    path: 'admin',
    meta: { title: '作品管理', icon: 'home' },
    component: RouterView,
    redirect: '/admin/single',
    children: [
      {
        path: 'single',
        meta: { title: '管理单曲' },
        component: () => import('@/views/test.vue')
      },
      {
        path: 'album',
        meta: { title: '管理专辑' },
        component: () => import('@/views/test.vue')
      },
      {
        path: 'demo',
        meta: { title: '管理Demo' },
        component: () => import('@/views/test.vue')
      },
    ]
  },
  {
    path: 'user',
    meta: { title: '个人管理', icon: 'home' },
    component: () => import('@/views/test.vue')
  }
]
const twoRoutes = [
  {
    path: 'upload',
    meta: { title: '作品上传', icon: 'home' },
    component: RouterView,
    children: [
      {
        path: 'podcast',
        meta: { title: '上传播客' },
        component: () => import('@/views/test.vue')
      },
    ]
  },
  {
    path: 'admin',
    meta: { title: '作品管理', icon: 'home' },
    component: RouterView,
    children: [
      {
        path: 'podcast',
        meta: { title: '管理播客' },
        component: () => import('@/views/test.vue')
      },
    ]
  }
]
const threeRoutes = [];

const routesMap = new Map([
  [1, oneOrfourRoutes],
  [2, twoRoutes],
  [3, threeRoutes],
  [4, oneOrfourRoutes],
])

const getAuthRoute = (type) => ({
  path: '/',
  name: 'system',
  meta: { requiresAuth: true },
  component: () => import('@/views/system/index.vue'),
  redirect: '/identity',
  children: [
    {
      path: 'identity',
      meta: { title: '身份管理', icon: 'home' },
      component: RouterView,
      redirect: '/identity/list',
      children: [
        {
          path: 'list',
          meta: { title: '创建或选择身份' },
          component: () => import('@/views/test.vue')
        },
        {
          path: 'edit',
          meta: { title: '编辑身份' },
          component: () => import('@/views/test.vue')
        }
      ]
    },
    ...routesMap.get(type)
  ]
})

export default getAuthRoute;