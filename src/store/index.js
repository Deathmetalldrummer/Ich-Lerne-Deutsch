import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    menu: [
      {
        icon:'visibility',
        title:'Читать',
        route:'/books'
      },{
        icon:'extension',
        title:'Учить слова',
        route:'/words'
      },{
        icon:'account_circle',
        title:'Мой кабинет',
        route:'/profile'
      },{
        icon:'exit_to_app',
        title:'Выйти',
        route:'/logout'
      },{
        icon:'input',
        title:'Войти',
        route:'/signin'
      },{
        icon:'lock_open',
        title:'Зарегестрироваться',
        route:'/signup'
      }
    ],
  },
  getters: {
    drawer: state => state.drawer,
    menu: state => state.menu
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
