import createPersistedState from 'vuex-persistedstate'

export default {
    state: {
        uid: 0,
        uia: 1
    },
    getters: {
        getUid: state => state.uid
    },
    mutations: {
        SETUID(state, id) {
            state.uid = id
        },
    },
    actions: {
        SETUID({commit}, id) {
            commit('SETUID', id)
        }
    },
}