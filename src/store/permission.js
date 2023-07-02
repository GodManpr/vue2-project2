import {createTree} from "@/utils/fn";

export default {
    state: {
        nav: [],// 菜单数据
        menuItem: [], //一级数据
        userPermission: []// 菜单按钮权限
    },
    getters: {
        getNav: state => state.nav,
        getUserPermission: state => state.userPermission
    },
    mutations: {
        SETNAV(state, data) {
            if (data?.length === 0) {
                state.nav = []
                console.log(state.nav);
            } else {
                state.menuItem = data
                data.map(item => {
                    if (item.father_id === 0) {
                        state.nav.push(item)
                    }
                })
                createTree(state.nav, data)
            }
        },
        INITNAV(state){
            state.nav = []
        },
        SETUSEPERMISSION(state, path) {
            const res = state.menuItem.filter(v => v.menu_url === path)
            state.userPermission = res.map(v => v.userPermission)
        }
    },
    actions: {
        SETNAV({commit}, data) {// 初始化所需要的路由数据
            return new Promise((resolve, reject) => {
                commit('SETNAV', data)
            })
        },
        SETPERMISSION({commit}, path) {
            return new Promise((resolve, reject) => {
                commit('SETUSEPERMISSION', path)
            })
        },
        INITNAV({commit}){
            commit('INITNAV')
        }
    },
}