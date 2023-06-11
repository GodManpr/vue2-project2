import Vue from 'vue'
import Vuex from 'vuex'
import tags from './tags'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tags
  },
  //实现持久化
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    // reducer(v) {
    //     return {
    //         tagList: v.tagList,
    //     }
    // }
    // paths:['tagList']
  })]
})
