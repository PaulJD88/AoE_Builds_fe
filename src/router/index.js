import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateBuild.vue')
  },
  {
    path: '/abbasid',
    name: 'Abbasid Dynasty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AbbasidDynasty.vue')
  },
  {
    path: '/chinese',
    name: 'The Chinese',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheChinese.vue')
  },
  {
    path: '/delhi',
    name: 'The Delhi Sultanate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheDelhiSultanate.vue')
  },
  {
    path: '/english',
    name: 'The English',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheEnglish.vue')
  },
  {
    path: '/french',
    name: 'The French',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheFrench.vue')
  },
  {
    path: '/romans',
    name: 'The Holy Roman Empire',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheHolyRomanEmpire.vue')
  },
  {
    path: '/mongols',
    name: 'The Mongols',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheMongols.vue')
  },
  {
    path: '/rus',
    name: 'The Rus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheRus.vue')
  },
  {
    path: '/aoe',
    beforeEnter (to, from, next) {
      window.location.href = 'https://www.ageofempires.com/'
    }
  },
  {
    path: '/facebook',
    beforeEnter (to, from, next) {
      window.location.href = 'https://www.facebook.com/ageofempires'
    }
  },
  {
    path: '/twitter',
    beforeEnter (to, from, next) {
      window.location.href = 'https://twitter.com/AgeOfEmpires/'
    }
  },
  {
    path: '/instagram',
    beforeEnter (to, from, next) {
      window.location.href = 'https://www.instagram.com/ageofempiresgame/'
    }
  },
  {
    path: '/youtube',
    beforeEnter (to, from, next) {
      window.location.href = 'https://www.youtube.com/user/officialageofempires'
    }
  },
  {
    path: '/github',
    beforeEnter (to, from, next) {
      window.location.href = 'https://github.com/PaulJD88'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
