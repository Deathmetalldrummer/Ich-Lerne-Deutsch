export default {
    state: {
        formProcessing: false
    },
    getters: {
        formProcessing: (state) => state.formProcessing
    },
    mutations: {
        formProcessing: (state, payload) => state.formProcessing = payload
    },
    actions: {
        formProcessing: (state, payload) => state.commit('formProcessing', payload)
    }
}
