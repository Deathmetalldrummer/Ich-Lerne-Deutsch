import * as firebase from "firebase";

export default {
    state: {
        isAuthenticated: false,
        uid: null
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated
    },
    mutations: {
        signIn: (state, payload) => {state.isAuthenticated = true; state.uid = payload},
        signOut: state => {state.isAuthenticated = false; state.uid = null},
    },
    actions: {
        signIn: ({commit,dispatch}, payload) => {
            if (payload.email && payload.password) {
                dispatch('formProcessing',true);
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then(response => {
                        commit('signIn', response.user.uid);
                        dispatch('formProcessing',false);
                    }).catch(error => {
                    dispatch('formProcessing',false);
                    dispatch('formError',{status: true, message: error.message});
                });
            }
        },
        signUp: ({commit,dispatch}, payload) => {
            if (payload.email && payload.password) {
                dispatch('formProcessing',true);
                firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then(response => {
                        commit('signIn', response.user.uid);
                        dispatch('formProcessing',false);
                    }).catch(error => {
                        dispatch('formProcessing',false);
                        dispatch('formError',{status: true, message: error.message});
                    });
            }
        },
        signOut: ({commit}) => commit('signOut'),
    },
}
