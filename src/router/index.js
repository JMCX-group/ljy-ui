import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import WithTour from '@/components/WithTour'
import Find from '@/components/Find'
import Message from '@/components/Message'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/with-tour',
      name: 'WithTour',
      component: WithTour
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
