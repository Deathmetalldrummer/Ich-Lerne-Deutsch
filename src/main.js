import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import configFirebase from './config/firebase.js';
import firebase from 'firebase';

firebase.initializeApp(configFirebase);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => {
    firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            store.commit('signIn', user.uid);
          } else if(router.history.current.path !== '/signin') {
            router.push('/signin');
          }
        }
    );
  },
}).$mount('#app');
