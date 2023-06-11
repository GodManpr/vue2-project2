import createPersistedState from 'vuex-persistedstate'

export default {
    state: {
        tagList: [{menu_name: '首页', menu_url: '/index'}]
    },
    getters: {
        getTagList: state => state.tagList
    },
    mutations: {
        ADDTAGS(state, data) {
            state.tagList.push(data)
        },
        DELTAG(state, data) {
            state.tagList.splice(data, 1)
        }
    },
    actions: {
        ADDTAGS({commit}, item) {
            commit('ADDTAGS', item)
        },
        DELTAG({commit}, item) {
            commit('DELTAG', item)
        }
    },


}