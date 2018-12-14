import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Bashboard from '@/page/bashboard'
import userList from '@/page/userList'
import block from '@/page/block'
import channel from '@/page/channel'
import index from '@/page/index'
import login from '@/page/login'
import regis from '@/page/regis'
import resetPass from '@/page/resetPass'
import applyNeed from '@/page/applyNeed'
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
      path: '/applyNeed',
      name: 'applyNeed',
      component: applyNeed
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
    },
    {
      path: '/regis',
      name: 'regis',
      component: regis
    },
    {
      path: '/resetPass',
      name: 'resetPass',
      component: resetPass
    }
  ]
})
