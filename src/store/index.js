import Vue from 'vue'
import Vuex from 'vuex'
import tags from './tags'
import user from "./user";
import createPersistedState from "vuex-persistedstate";
import permission from "@/store/permission";

Vue.use(Vuex)

// 1、path方式
// const PERSIST_PATHS = ['tags.tagList', 'user.uid']

// 2、reducer方式
function PERSIST_REDUCER(v) {
    return {
        tags: {tagList: v.tags.tagList},
        user: {uid: v.user.uid}
    }
}


export default new Vuex.Store({
    modules: {
        tags,
        user,
        permission
    },
    //实现持久化
    plugins: [createPersistedState({
        storage: window.sessionStorage,
        reducer(v) {
            return {
                ...PERSIST_REDUCER(v)
            }
        },
        // paths:['tags.tagList','user.uid']
    })]
})
