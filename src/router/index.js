import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Words from '../views/Words.vue'
import Books from '../views/Books.vue'
import * as firebase from "firebase";
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: Signin
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/signout',
    name: 'SignOut',
    beforeEnter: signOut
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

function signOut(from, to, next) {
    firebase.auth().signOut()
        .then(() => {
          store.dispatch('signOut');
          // .then(()=>{next('/signin');});
          next('/signin');
        })
        .catch(function(error) {
          console.log(error);
        });
}
