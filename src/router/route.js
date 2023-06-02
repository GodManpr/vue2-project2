const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/login/index.vue')
  },
  {
    path: '/home',
    redirect: '/index',
    name: 'home',
    component: () => import('@/views/index.vue'),
  },
]

export default routes