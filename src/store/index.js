import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu.js'
import processing from './processing.js'
import user from './user.js'
import error from './error.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  getters: {
    drawer: state => state.drawer,
  },
  mutations: {
    drawer: (state, data) => state.drawer = data,
  },
  actions: {
    drawer: (state, data) => state.commit('drawer', data),
  },
  modules: {
    menu,
    user,
    processing,
    error
  }
})
