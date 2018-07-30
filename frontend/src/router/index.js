import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/components/ToDo'
import Main from '@/components/Main'
import Join from '@/components/Join'
import JoinLogin from '@/components/JoinLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/Join',
      name: 'Join',
      component: Join
    },
    {
      path: '/JoinLogin',
      name: 'JoinLogin',
      component: JoinLogin
    }
  ]
})
