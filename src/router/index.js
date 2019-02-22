import Vue from 'vue'
import Router from 'vue-router'
const Test = () => import('@/components/test')
const Test1 = () => import('@/components/test1')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      beforeEnter: (to, from, next) => {
        console.log('这是test里的beforeEnter')
        next()
      }
    },
    {
      path: '/test1',
      name: 'test1',
      component: Test1,
      beforeEnter: (to, from, next) => {
        console.log('这是test1里的beforeEnter')
        next()
      }
    }
  ]
})
