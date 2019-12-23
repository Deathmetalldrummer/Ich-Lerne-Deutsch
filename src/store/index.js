import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {
    drawer: state => state.drawer
  },
  mutations: {
    drawer: (state, data) => state.drawer = data,
  },
  actions: {
    drawer: (state, data) => state.commit('drawer', data),
  },
  modules: {
  }
})
