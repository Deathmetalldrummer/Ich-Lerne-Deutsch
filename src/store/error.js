export default {
    state: {
        formError: {
            status: false,
            message: 'WTF Bro!?',
        }
    },
    getters: {
        formError: (state) => state.formError
    },
    mutations: {
        formError: (state, payload) => {
            state.formError.status = payload.status;
            state.formError.message = payload.message;
        }
    },
    actions: {
        formError: (state, payload) => state.commit('formError', payload)
    }
}
