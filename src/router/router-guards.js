import store from "@/store"
import {findModulesByUid} from "@/api/api";
import routes from "@/router/route";
import {initRoutes} from "@/utils/fn";
import VueRouter from 'vue-router'

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export function createRouterGuards(router) {
    router.beforeEach(async (to, from, next) => {
        if (to.path === '/login') {
            next()
        } else {
            if (store.getters.getNav?.length === 0) {
                // 发请求
                const res = await findModulesByUid(store.getters.getUid)
                // 缓存数据
                store.dispatch('SETNAV', res.data.data.list)
                // 拿到home下的children
                let homeRoutes = routes.filter(v => v.path === '/home')[0]
                homeRoutes.children = []
                // 初始化路由数据
                initRoutes(store.getters.getNav, homeRoutes)
                router.addRoute(homeRoutes)
                next({...to})
            } else {
                // 有请求
                next()
            }
        }
        // next()
    })

    router.afterEach((to, from) => {
        document.title = (to?.meta?.title) || document.title
    })
}