import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Bashboard from '@/page/bashboard'
import userList from '@/page/userList'
import block from '@/page/block'
import channel from '@/page/channel'
import index from '@/page/index'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
      // name: 'Bashboard',
      // component: Bashboard
    },
    {
      path: '/index',
     // redirect:'/'
      name: 'index',
      component: index
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList
    },
    {
      path: '/block',
      name: 'block',
      component: block
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
