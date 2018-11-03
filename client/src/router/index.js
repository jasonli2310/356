import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Posts',
      component: Posts
    }
  ]
})
