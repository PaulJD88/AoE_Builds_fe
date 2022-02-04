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
    component: () => import('../views/CreateBuild.vue')
  },
  {
    path: '/abbasid',
    name: 'Abbasid Dynasty',
    component: () => import('../views/AbbasidDynasty.vue')
  },
  {
    path: '/chinese',
    name: 'The Chinese',
    component: () => import('../views/TheChinese.vue')
  },
  {
    path: '/delhi',
    name: 'The Delhi Sultanate',
    component: () => import('../views/TheDelhiSultanate.vue')
  },
  {
    path: '/english',
    name: 'The English',
    component: () => import('../views/TheEnglish.vue')
  },
  {
    path: '/french',
    name: 'The French',
    component: () => import('../views/TheFrench.vue')
  },
  {
    path: '/romans',
    name: 'The Holy Roman Empire',
    component: () => import('../views/TheHolyRomanEmpire.vue')
  },
  {
    path: '/mongols',
    name: 'The Mongols',
    component: () => import('../views/TheMongols.vue')
  },
  {
    path: '/rus',
    name: 'The Rus',
    component: () => import('../views/TheRus.vue')
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
