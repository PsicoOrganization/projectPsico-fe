import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Account from './components/Account.vue'
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUS.vue'
import Psychologists from './components/Psychologists.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/psychologists',
    name: 'psychologists',
    component: Psychologists
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/user/logIn',
    name: 'logIn',
    component: LogIn
  },
  {
    path: '/user/home',
    name: 'home',
    component: Home
  },
  {
    path: '/user/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/user/account',
    name: 'account',
    component: Account
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
