export function createRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach((to, from) => {
    document.title = (to?.meta?.title) || document.title
  })
}