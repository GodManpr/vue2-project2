import {onMounted} from "vue";
import store from "@/store"

export const usePermission = () => {
    // 1、获取路由地址
    const permissions = path => {
        store.dispatch('SETPERMISSION', path)
    }
    // 2、拿到userPermisison
    // 3、按钮匹配
    const menuStatus = item => {
        return store.getters.getUserPermission.some(v => !v.includes(item))
    }

    return {
        menuStatus,
        permissions
    }
}